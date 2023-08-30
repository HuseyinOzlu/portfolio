// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files'

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

export default makeSource({ contentDirPath: 'posts', documentTypes: [Post] });