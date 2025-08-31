import { useMemo } from "react"
import Panel from "../component/Panel/Panel"
import Pre from "../component/Pre"
import HowIAm from "../component/custom/HowIAm"
import Skills from "../component/custom/Skills"
import Contact from "../component/custom/Contact"
import Experience from "../component/custom/Experience"
import Study from "../component/custom/Study"


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
                    <p>Étudiant en BUT Informatique à | PORTFOLIO</p>
                </Panel>
            </header>
        )
    },[])

    const Main = useMemo(()=>{
        return (
            <main className="flex flex-col md:flex-row m-2 md:m-5 h-fit">
                <div className="md:flex-1">
                    <HowIAm/>
                    <Skills/>
                </div>
                <div className="md:flex-1">
    
                </div>
                <div className="md:flex-1">
                    <Contact/>
                    <Experience/>
                    <Study/>
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