import { lazy, useMemo } from "react"
import Panel from "../component/Panel/Panel"
import Pre from "../component/Pre"

const HowIAm = lazy(() => import("./HowIAm"));
const Skills = lazy(() => import("./Skills"));
const Project = lazy(() => import("./Project"));
const Experience = lazy(() => import("./Experience"));
const Contact = lazy(() => import("./Contact"));
const Study = lazy(() => import("./Study"));
const Passions = lazy(() => import("./Passions"));



const Main = () =>{



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
            <main className="columns-1 md:columns-2 xl:columns-3 m-2 md:m-5 gap-4">
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
                    <span className="text-white text-sm">Disponible pour vos projets</span>
                </Panel>
            </footer>
        )
    },[])

    return (
        <section className=" flex flex-col font-[monospace]">
            {Header}
            {Main}
            {Footer}
        </section>
    )
}

export default Main