import { useMemo } from "react"
import Panel from "../Panel/Panel"
import PanelContent from "../Panel/PanelContent"
import PanelTitle from "../Panel/PanelTitle"

interface contactsList {
    name:string
    link:string
}

const ContactList:Array<contactsList> = [
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

const Contact = () =>{

    const ContactListComponents = useMemo(()=>{
        return ContactList.map((el)=>{
            return <pre key={"skill-"+Math.random()}> {el.name}</pre>
        })
    },[])   

    return (
        <Panel >
            <PanelTitle title="$ ls /skills/"/>
            <PanelContent>
                {ContactListComponents}
            </PanelContent>
        </Panel>
    )
}

export default Contact


