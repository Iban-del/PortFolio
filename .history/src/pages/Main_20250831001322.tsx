import { useMemo } from "react"
import Panel from "../component/Panel/Panel"
import Pre from "../component/Pre"
import HowIAm from "../component/custom/HowIAm"
import Skills from "../component/custom/Skills"
import Contact from "../component/custom/Contact"
import Experience from "../component/custom/Experience"
import Study from "../component/custom/Study"
import Project from "../component/custom/Project"
import Passions from "../component/custom/passions"


const Main = ({

}) =>{

    const Header = useMemo(()=>{
        return (
            <header className=" m-2 xl:m-5">
                <Panel className="flex justify-center flex-col items-center">
                    <Pre 
                        content={"██╗██████╗  █████╗ ███╗   ██╗\n██║██╔══██╗██╔══██╗████╗  ██║\n██║██████╔╝███████║██╔██╗ ██║\n██║██╔══██╗██╔══██║██║╚██╗██║\n██║██████╔╝██║  ██║██║ ╚████║\n╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝"} 
                        className="text-white"
                    />
                    <p>Étudiant en BUT Informatique | PORTFOLIO</p>
                </Panel>
            </header>
        )
    },[])

const Main = useMemo(()=>{
    return (
        <main className="columns-1 md:columns-2 lg:columns-3 m-2 md:m-5 gap-4">
            <div className="break-inside-avoid mb-4"><HowIAm/></div>
            <div className="break-inside-avoid mb-4"><Skills/></div>
            <div className="break-inside-avoid mb-4"><Project/></div>
            <div className="break-inside-avoid mb-4"><Experience/></div>
            <div className="break-inside-avoid mb-4"><Contact/></div>
            <div className="break-inside-avoid mb-4"><Study/></div>
            <div className="break-inside-avoid mb-4"><Passions/></div>
        </main>
    )
},[])

    const Footer = useMemo(()=>{
        return (
            <footer className="m-2 xl:m-5">
                <Panel className="flex justify-center flex-col items-center">
                    <p>Iban DELETOILLE-ELIZALDE </p>
                    <span className="text-sm">Disponible pour tous projets</span>
                </Panel>
            </footer>
        )
    },[])

    return (
        <section className=" flex flex-col">
            {Header}
            {Main}
            {Footer}
        </section>
    )
}

export default Main