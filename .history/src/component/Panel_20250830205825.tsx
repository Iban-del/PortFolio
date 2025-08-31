import { useRef, type JSX } from "react"

interface panel{
    children:JSX.Element|JSX.Element[]
}

const Panel = ({
    children
}) =>{

    const ref = useRef<JSX.Element>(null)

    return (
        <section
            ref={ref}
        >

        </section>
    )
}