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
        return SkillsList.map((el)=>{
            return <pre key={"skill-"+Math.random()}> # {el.name}</pre>
        })
    },[])   

    return (
        <article className="p-5">
            <Panel >
                <PanelTitle title="$ ls /skills/"/>
                <PanelContent>
                    {SkillsListComponents}
                </PanelContent>
            </Panel>
        </article>
    )
}

export default Skills


