import Panel from "../component/Panel/Panel"
import Pre from "../component/Pre"


const Main = ({

}) =>{

    return (
        <section className=" grid grid-cols-1 grid-rows-3 p-5 h-screen w-screen">
            <header>
                <Panel className="flex justify-center flex-col items-center">
                    <Pre 
                        content={"██╗██████╗  █████╗ ███╗   ██╗\n██║██╔══██╗██╔══██╗████╗  ██║\n██║██████╔╝███████║██╔██╗ ██║\n██║██╔══██╗██╔══██║██║╚██╗██║\n██║██████╔╝██║  ██║██║ ╚████║\n╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝"} 
                        className="text-white"
                    />
                    <p>Étudiant en BUT Informatique à | PORTFOLIO</p>
                </Panel>
            </header>
            <main>

            </main>
            <footer>
                <Panel className="flex justify-center flex-col items-center">

                    <p>Étudiant en BUT Informatique à | PORTFOLIO</p>
                </Panel>
            </footer>
        </section>
    )
}

export default Main