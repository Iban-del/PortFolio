import { useRef, type JSX } from "react"

interface panelTitle{
    children:JSX.Element|JSX.Element[]|string|undefined
    className?:string
}

const PanelTitle = ({
    children,
    className = ""
}:panelTitle) =>{

    const ref = useRef<HTMLDivElement>(null)

    return (
        <div
            ref={ref}
            className={"w-full h-full p-1 border-2 border-gray bg-panel "+className}
        >
            {children}
        </div>
    )
}

export default PanelTitle