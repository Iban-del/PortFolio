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
    {name:"Stage Developpeur d'application",content:["Développement: système de refroidissement intelligent",'d']},
]

const Experience = () =>{

    const ExperienceListComponents = useMemo(()=>{
        return ExperienceList.map((el)=>{
            return (
                <div key={"skill-"+Math.random()}>
                    <h2># {el.name}:</h2>
                    {el.content.map((content) =><p>## </p>)}
                    
                </div>
            )
        })
    },[])   

    return (
        <Panel >
            <PanelTitle title="$ cat /experience.cfg"/>
            <PanelContent>
                {ExperienceListComponents}
            </PanelContent>
        </Panel>
    )
}

export default Experience


