import Panel from "../component/Panel/Panel"
import Pre from "../component/Pre"


const Main = ({

}) =>{

    return (
        <section className=" grid grid-cols-1 grid-rows-3 p-5">
            <header>
                <Panel className="flex justify-center flex-col items-center">
                    <Pre 
                        content={"██╗██████╗  █████╗ ███╗   ██╗\n██║██╔══██╗██╔══██╗████╗  ██║\n██║██████╔╝███████║██╔██╗ ██║\n██║██╔══██╗██╔══██║██║╚██╗██║\n██║██████╔╝██║  ██║██║ ╚████║\n╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝"} 
                        className="text-white"
                    />
                    <p>Étudiant en BUT Informatique à Laval | PORTFOLIO</p>
                </Panel>
            </header>
            <main>

            </main>
            <footer>

            </footer>
        </section>
    )
}

export default Main