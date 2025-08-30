import { useRef } from "react"

interface panelContent{
    title:string
    className?:string
}

const PanelContent = ({
    title,
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