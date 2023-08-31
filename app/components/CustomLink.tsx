import Link from "next/link";

export default function CustomLink(props: any){
    const href = props.href;

    
    if (href.startsWith('/')) {
    return (
        <Link href={href} {...props}>
            {props.children} {/* //*if using symbol of '/' at url, go to root or children  */}
        </Link>
    );
}
    
    if (href.startsWith('#')) {
        return <a {...props} />; {/* //* if using symbol of '#'*/}
    }

    return <a target="_blank" rel="noopener noreferrer" {...props} />;
};