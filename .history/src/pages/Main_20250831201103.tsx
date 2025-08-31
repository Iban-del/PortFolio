import { lazy, Suspense } from "react";
import { useMemo } from "react"
import Panel from "../component/Panel/Panel"
import Pre from "../component/Pre"

const HowIAm = lazy(() => import("../component/custom/HowIAm"));
const Skills = lazy(() => import("../component/custom/Skills"));
const Project = lazy(() => import("../component/custom/Project"));
const Experience = lazy(() => import("../component/custom/Experience"));
const Contact = lazy(() => import("../component/custom/Contact"));
const Study = lazy(() => import("../component/custom/Study"));
const Passions = lazy(() => import("../component/custom/Passions"));



const Main = () =>{
    
    return (
        <section className=" flex flex-col font-[monospace]">
            <header className=" m-2 xl:m-5">
                <Panel className="flex justify-center flex-col items-center">
                    <Pre 
                        content={"██╗██████╗  █████╗ ███╗   ██╗\n██║██╔══██╗██╔══██╗████╗  ██║\n██║██████╔╝███████║██╔██╗ ██║\n██║██╔══██╗██╔══██║██║╚██╗██║\n██║██████╔╝██║  ██║██║ ╚████║\n╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝"} 
                        className="text-white"
                    />
                    <p>Étudiant en BUT Informatique | PORTFOLIO</p>
                </Panel>
            </header>
            <main className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 m-2 md:m-5 gap-4">
                {[HowIAm, Skills, Project, Experience, Contact, Study, Passions].map((Component, i) => (
                    <div key={i} className="mb-4">
                    <Suspense fallback={<div>Chargement...</div>}>
                        <Component />
                    </Suspense>
                    </div>
                ))}
            </main>
            <footer className="m-2 xl:m-5">
                <Panel className="flex justify-center flex-col items-center">
                    <p>Iban DELETOILLE-ELIZALDE </p>
                    <span className="text-white text-sm">Disponible pour vos projets</span>
                </Panel>
            </footer>
        </section>
    )
}

export default Main