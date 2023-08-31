// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from 'rehype-autolink-headings'; 

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: 'string', required: true },
    summary: { type: 'string', required: true },
    publishDate: { type: 'date', required: true }, 
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc)=> doc._raw.flattenedPath.replace(/\.mdx$/, ""),
    },
    url: { 
      type: 'string',
      resolve: (post) => `/blog/${post._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({ 
  contentDirPath: 'posts', 
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode, {
          theme: "rose-pine",
          onVisitLine(node: any) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node: any) {
            const nodeClass = node.properties.className;
            if (nodeClass && nodeClass.length > 0) {
              node.properties.className.push("line--highlighted");
            } else {
              node.properties.className = ["line--highlighted"];
            }
          },
          onVisitHighlightedWord(node: any) {
            node.properties.className = ["word--highlighted"];
          },
        },
    ], /* for MDX Highlithing  */
    [rehypeAutolinkHeadings, 
      {
        properties: 
        {
          className: ["anchor"],
        },
      },
    ],
    ],
  },
});