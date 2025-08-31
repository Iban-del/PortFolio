import Panel from "../component/Panel/Panel"
import Pre from "../component/Pre"


const Main = ({

}) =>{

    return (
        <section className=" flex flex-col p-5 h-screen w-screen">
            <header className="flex-1">
                <Panel className="flex justify-center flex-col items-center">
                    <Pre 
                        content={"██╗██████╗  █████╗ ███╗   ██╗\n██║██╔══██╗██╔══██╗████╗  ██║\n██║██████╔╝███████║██╔██╗ ██║\n██║██╔══██╗██╔══██║██║╚██╗██║\n██║██████╔╝██║  ██║██║ ╚████║\n╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝"} 
                        className="text-white"
                    />
                    <p>Étudiant en BUT Informatique à | PORTFOLIO</p>
                </Panel>
            </header>
            <main className=" flex-7">

            </main>
            <footer className="flex-1">
                <Panel className="flex justify-center flex-col items-center">
                    <p>Iban DELETOILLE-ELIZALDE</p>
                    <span className="text-sm">Disponible pour tous projets</span>
                </Panel>
            </footer>
        </section>
    )
}

export default Main