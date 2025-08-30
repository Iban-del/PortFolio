import Panel from "../component/Panel/Panel"
import Pre from "../component/Pre"


const Main = ({

}) =>{

    return (
        <section className=" grid grid-cols-1 grid-rows-3 p-5">
            <header>
                <Panel>
                    <Pre content={"          _____                    _____                    _____                    _____          \n         /\\    \\                  /\\    \\                  /\\    \\                  /\\    \\         \n        /::\\    \\                /::\\    \\                /::\\    \\                /::\\____\\        \n        \\:::\\    \\              /::::\\    \\              /::::\\    \\              /::::|   |        \n         \\:::\\    \\            /::::::\\    \\            /::::::\\    \\            /:::::|   |        \n          \\:::\\    \\          /:::/\\:::\\    \\          /:::/\\:::\\    \\          /::::::|   |        \n           \\:::\\    \\        /:::/__\\"}/>
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