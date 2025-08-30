import { useRef, type JSX } from "react"

interface panel{
    children:JSX.Element|JSX.Element[]
}

const Panel = ({
    children
}:panel) =>{

    const ref = useRef<HTMLElement>(null)

    return (
        <section
            ref={ref}
            className="w-full h-full m-2"
        >
            {children}
        </section>
    )
}

export default Panel