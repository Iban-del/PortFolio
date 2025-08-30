
interface pre{
    content:string
    classNames?:string
}

const Pre = ({
    content,
    className = ""
}:pre) =>{

    return (
        <pre className="m-2 text-[8px] md:text-[16px] leading-2 md:leading-4 w-fit  font-[monospace] ">
            {content}
        </pre>
    )
}

export default Pre