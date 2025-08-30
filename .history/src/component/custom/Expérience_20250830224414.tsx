import { useMemo } from "react"
import Panel from "../Panel/Panel"
import PanelContent from "../Panel/PanelContent"
import PanelTitle from "../Panel/PanelTitle"

interface experienceList {
    name:string
    link:string,
    alias:string
}

const ExperienceList:Array<experienceList> = [
    {name:"Github",link:"https://github.com/Iban-del",alias:"github.com/Iban-del"},
    {name:"Linkedin",link:"https://www.linkedin.com/in/iban-deletoille-elizalde-2a5780335",alias:"iban-deletoille-elizalde"},
    {name:"Mail",link:"mailto:deletoilleelizaldeiban@gmail.com",alias:"deletoilleelizaldeiban@gmail.com"},
    {name:"Discord",link:"https://discordapp.com/users/764769604635459584",alias:"@Bouboune"},
]

const Experience = () =>{

    const ExperienceListComponents = useMemo(()=>{
        return ExperienceList.map((el)=>{
            return <pre key={"skill-"+Math.random()}>{el.name}: <a href={el.link}>{el.alias}</a></pre>
        })
    },[])   

    return (
        <Panel >
            <PanelTitle title="$ ls /skills/"/>
            <PanelContent>
                {ExperienceListComponents}
            </PanelContent>
        </Panel>
    )
}

export default Experience


