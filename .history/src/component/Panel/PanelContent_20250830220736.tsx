import { useRef } from "react"

interface panelContent{
    content:string
    className?:string
}

const PanelContent = ({
    content,
    className = ""
}:panelContent) =>{

    const ref = useRef<HTMLDivElement>(null)

    return (
        <div
            ref={ref}
            className={"w-full h-full p-1"+className}
        >
            {title}
            <hr/>
        </div>
    )
}

export default PanelContent