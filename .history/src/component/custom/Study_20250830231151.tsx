import { useMemo } from "react"
import Panel from "../Panel/Panel"
import PanelContent from "../Panel/PanelContent"
import PanelTitle from "../Panel/PanelTitle"

interface studyList {
    name:string
    content:string
}

const StudyList:Array<studyList> = [
    {name:"Network Informatique",content:"Contrat de développeur d'application"},

]

const Study = () =>{

    const StudyListComponents = useMemo(()=>{
        return StudyList.map((el)=>{
            return (
                <div>
                    
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


