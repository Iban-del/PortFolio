import { useMemo } from "react"
import Panel from "../Panel/Panel"
import PanelContent from "../Panel/PanelContent"
import PanelTitle from "../Panel/PanelTitle"

interface passionsList {
    name:string
    content:string
}

const PassionsList:Array<passionsList> = [
    {name:"Actuellement",content:"BUT informatique de LAVAL"},
    {name:"(2022-2025)",content:"Bac Pro Système numérique"},
]

const Passions = () =>{

    const PassionsListComponents = useMemo(()=>{
        return PassionsList.map((el)=>{
            return (
                <div key={"passions-"+Math.random()} className="p-1">
                    <h2># {el.name}:</h2>
                    <p>## {el.content}</p>
                </div>
            )
        })
    },[])   

    return (
        <Panel >
            <PanelTitle title="$ cat /studies.txt"/>
            <PanelContent>
                {PassionsListComponents}
            </PanelContent>
        </Panel>
    )
}

export default Passions


