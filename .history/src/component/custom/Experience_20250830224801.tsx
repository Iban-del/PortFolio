import { useMemo } from "react"
import Panel from "../Panel/Panel"
import PanelContent from "../Panel/PanelContent"
import PanelTitle from "../Panel/PanelTitle"

interface experienceList {
    name:string
    content:string
}

const ExperienceList:Array<experienceList> = [
    {name:"Github",content:"github.com/Iban-del"},
    {name:"Linkedin",content:"iban-deletoille-elizalde"},
    {name:"Mail",content:"deletoilleelizaldeiban@gmail.com"},
    {name:"Discord",content:"@Bouboune"},
]

const Experience = () =>{

    const ExperienceListComponents = useMemo(()=>{
        return ExperienceList.map((el)=>{
            return (
                <div key={"skill-"+Math.random()}>
                    {el.name}: 
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


