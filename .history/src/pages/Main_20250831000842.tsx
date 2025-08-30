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
            <main className="grid md:grid-cols-2 lg:grid-cols-3 m-2 md:m-5 h-fit gap-4">
                {/* Colonne principale - présentation */}
                <div className="md:col-span-2 lg:col-span-1">
                    <HowIAm/>
                    <Contact/>
                </div>
                
                {/* Colonne technique */}
                <div>
                    <Skills/>
                    <Experience/>
                </div>
                
                {/* Colonne projets/background */}
                <div className="lg:col-span-1 md:col-span-2">
                    <Project/>
                    <Study/>
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