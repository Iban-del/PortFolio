import { useRef } from "react"

interface panelTitle{
    title:string
    className?:string
}

const PanelContent = ({
    title,
    className = ""
}:panelTitle) =>{

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