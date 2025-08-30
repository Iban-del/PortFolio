import { useMemo } from "react"
import Panel from "../Panel/Panel"
import PanelContent from "../Panel/PanelContent"
import PanelTitle from "../Panel/PanelTitle"

interface skillsList {
    name:string
}

const SkillsList:Array<skillsList> = [
    {name:"JavaScript"},
    {name:"TypeScript"},
    {name:"React"},
    {name:"ExtJs"},
    {name:"HTML"},
    {name:"Tailwindcss"},
    {name:"CSS"},
    {name:"PHP"},
    {name:"Laminas"},
    {name:"Python"},
    {name:"C"},
    {name:"SQL"},
    {name:"Redis"},
    {name:"Github"},
]

const Skills = () =>{

    const SkillsListComponents = useMemo(()=>{

    },[])

    return (
        <Panel>
            <PanelTitle title="$ ls /skills/"/>
            <PanelContent>
                <p>
                    Actuellement âgé de 18 ans, je suis développeur d'applications chez Network Informatique et étudiant à l'IUT de Laval en BUT Informatique.
                    Passionné par le développement et les nouvelles technologies, je suis en apprentissage constant. 
                    Curieux et motivé, je m'efforce de découvrir et de maîtriser en continu de nouveaux outils, langages et environnements de développement.
                    À travers ce portfolio, je partage mes projets et expérimentations et le fruits de ma progression.
                </p>
            </PanelContent>
        </Panel>
    )
}

export default Skills


