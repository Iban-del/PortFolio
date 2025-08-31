import { useRef, type JSX } from "react"

interface panel{
    children:JSX.Element|JSX.Element[]
}

const Panel = ({
    children
}) =>{

    const ref = useRef<HTMLElement>(null)

    return (
        <section
            ref={ref}
            className=""
        >

        </section>
    )
}