import { useRef, type JSX } from "react"

interface panelTitle{
    title:string
    className?:string
}

const PanelTitle = ({
    title,
    className = ""
}:panelTitle) =>{

    const ref = useRef<HTMLDivElement>(null)

    return (
        <div
            ref={ref}
            className={"w-full h-full p-1 border-2 border-gray bg-panel "+className}
        >
            {title}
            <hr/>
        </div>
    )
}

export default PanelTitle