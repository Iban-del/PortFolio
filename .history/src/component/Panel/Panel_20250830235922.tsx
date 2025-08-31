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
        <article
            ref={ref}
            className={"w-full p-1 border-2 border-gray bg-panel "+className}
        >
            {children}
        </article>
    )
}

export default Panel