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
            <header className=" m-2 md:m-5">
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
        <main className="m-2 md:m-5 space-y-4 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4">
            {/* Mobile: tout en colonne, Desktop: organisé */}
            <HowIAm className="md:col-span-2 lg:col-span-3"/>
            
            <div className="md:col-span-1 space-y-4">
                <Skills/>
                <Contact/>
            </div>
            
            <div className="md:col-span-1 lg:col-span-2 space-y-4">
                <Project/>
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
                    <Experience/>
                    <Study/>
                </div>
                <Passions/>
            </div>
        </main>
    )
},[])

    const Footer = useMemo(()=>{
        return (
            <footer className="m-2 md:m-5">
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