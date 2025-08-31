import { useMemo } from "react"
import Panel from "../Panel/Panel"
import PanelContent from "../Panel/PanelContent"
import PanelTitle from "../Panel/PanelTitle"

interface studyList {
    name:string
    content:string
}

const StudyList:Array<studyList> = [
    {name:"Actuellement",content:"BUT informatique de LAVAL"},
    {name:"(2022-2025)",content:"Bac Pro Système numérique"},
]

const Study = () =>{

    const StudyListComponents = useMemo(()=>{
        return StudyList.map((el)=>{
            return (
                <div key={"skill-"+Math.random()} className="p-1">
                    <h2># {el.name}:</h2>
                    <p>## {el.content}</p>
                </div>
            )
        })
    },[])   

    return (
        <Panel >
            <PanelTitle title="$ cat /study.txt"/>
            <PanelContent>
                {StudyListComponents}
            </PanelContent>
        </Panel>
    )
}

export default Study


