import { useMemo } from "react"
import Panel from "../Panel/Panel"
import PanelContent from "../Panel/PanelContent"
import PanelTitle from "../Panel/PanelTitle"

interface experienceList {
    name:string
    content:string
}

const ExperienceList:Array<experienceList> = [
    {name:"Network",content:"Au cours de mon année de terminale, j’ai eu l’opportunité d’intégrer l’entreprise Network Informatique en tant que développeur d’applications. Cette expérience m’a permis de découvrir concrètement le fonctionnement d’un service informatique, de participer au développement de solutions logicielles, et de renforcer mes compétences en programmation, en résolution de problèmes et en travail d’équipe."},
    {name:"Linkedin",content:"iban-deletoille-elizalde"},
    {name:"Mail",content:"deletoilleelizaldeiban@gmail.com"},
    {name:"Discord",content:"@Bouboune"},
]

const Experience = () =>{

    const ExperienceListComponents = useMemo(()=>{
        return ExperienceList.map((el)=>{
            return (
                <div key={"skill-"+Math.random()}>
                    <h2>#{el.name}:</h2>
                    <p>     {el.content}</p>
                    
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


