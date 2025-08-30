import { useRef, type JSX } from "react"

interface panelContent{
    children:JSX.Element|JSX.Element[]|string|undefined
    className?:string
}

const PanelContent = ({
    children,
    className = ""
}:panelContent) =>{
    
    const ref = useRef<HTMLDivElement>(null)

    return (
        <div
            ref={ref}
            className={"w-full h-full p-1"+className}
        >
            {children}
            <hr/>
        </div>
    )
}

export default PanelContent