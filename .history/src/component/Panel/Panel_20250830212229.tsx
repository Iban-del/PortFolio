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
            className="w-fit h-fit m-2 p-1 border-2 border-gray"
        >
            {children}
        </div>
    )
}

export default Panel