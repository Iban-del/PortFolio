import { useRef, type JSX } from "react"

interface panel{
    children:JSX.Element|JSX.Element[]|string|undefined
    className?:string
}

const Panel = ({
    children,
    className = ""
}:panel) =>{

    const ref = useRef<HTMLDivElement>(null)

    return (
        <div
            ref={ref}
            className={"w-full h-full m-2 p-1 border-2 border-gray "+className}
        >
            {children}
        </div>
    )
}

export default Panel