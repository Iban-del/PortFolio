import { useRef, type JSX } from "react"

interface panel{
    children:JSX.Element|JSX.Element[]|string|undefined
}

const Panel = ({
    children
}:panel) =>{

    const ref = useRef<HTMLDivElement>(null)

    return (
        <div
            ref={ref}
            className="w-full h-full m-2 border-2 border-gray-800"
        >
            {children}
        </div>
    )
}

export default Panel