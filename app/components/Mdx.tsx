import { useMDXComponent } from "next-contentlayer/hooks"
import RoundedImage from "./RoundedImage"
import CustomLink from "./CustomLink"


const components = {
    Image: RoundedImage,
    a: CustomLink,
}

type MdxProps = {
    code: string
}



export default function Mdx({ code }: MdxProps) {
    const Component = useMDXComponent(code)
    return (
        <div className="prose prose-pink">
            <Component components={components}/>
        </div>
    )
}