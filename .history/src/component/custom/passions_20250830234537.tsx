import { useMemo } from "react"
import Panel from "../Panel/Panel"
import PanelContent from "../Panel/PanelContent"
import PanelTitle from "../Panel/PanelTitle"

interface passionsList {
    content:string
}

const PassionsList:Array<passionsList> = [
    {content:"BUT informatique de LAVAL"},
    {content:"Bac Pro Système numérique"},
]

const Passions = () =>{

    const PassionsListComponents = useMemo(()=>{
        return PassionsList.map((el)=>{
            return (
                <div key={"passions-"+Math.random()} className="p-1">
                    <p># {el.content}</p>
                </div>
            )
        })
    },[])   

    return (
        <Panel >
            <PanelTitle title="$ cat /Activities_Passions.txt"/>
            <PanelContent>
                {PassionsListComponents}
            </PanelContent>
        </Panel>
    )
}

export default Passions


