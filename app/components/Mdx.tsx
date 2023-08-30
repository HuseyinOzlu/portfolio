import { useMDXComponent } from "next-contentlayer/hooks"
import RoundedImage from "./RoundedImage"


const components = {
    Image: RoundedImage
}

type MdxProps = {
    code: string
}



export default function Mdx({ code }: MdxProps) {
    const Component = useMDXComponent(code)
    return (
        <div className="prose prose-pink">
            {/* // TODO: 1:51:51// */}
            <Component components={components}/>
        </div>
    )
}