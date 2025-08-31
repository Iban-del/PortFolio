import { useMemo } from "react"
import Panel from "../Panel/Panel"
import PanelContent from "../Panel/PanelContent"
import PanelTitle from "../Panel/PanelTitle"

interface projectList {
    name:string
}

const ProjectList:Array<projectList> = [
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

const Project = () =>{

    const ProjectListComponents = useMemo(()=>{
        return ProjectList.map((el)=>{
            return <pre key={"pkill-"+Math.random()}> {el.name}</pre>
        })
    },[])   

    return (
        <Panel >
            <PanelTitle title="$ ls /project/"/>
            <PanelContent>
                {ProjectListComponents}
            </PanelContent>
        </Panel>
    )
}

export default Project


