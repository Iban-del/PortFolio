import { useMemo } from "react"
import Panel from "../Panel/Panel"
import PanelContent from "../Panel/PanelContent"
import PanelTitle from "../Panel/PanelTitle"

interface experienceList {
    name:string
    content:string[]
}

const ExperienceList:Array<experienceList> = [
    {name:"Network Informatique",content:["Contrat de développeur d'application"]},
    {name:"Stage Developpeur d'application",content:["Développement d'un système de refroidissement autonome","Développement d'une interface de gestion de traduction"]},
]

const Experience = () =>{

    const ExperienceListComponents = useMemo(()=>{
        return ExperienceList.map((el)=>{
            return (
                <div key={"experience-"+Math.random()} className="p-1">
                    <h2># {el.name}:</h2>
                    {el.content.map((content) =><p key={"experience-content-"+Math.random()}>## {content}</p>)}
                </div>
            )
        })
    },[])   

    return (
        <Panel >
            <PanelTitle title="$ cat /experience.txt"/>
            <PanelContent>
                {ExperienceListComponents}
            </PanelContent>
        </Panel>
    )
}

export default Experience


