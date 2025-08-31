import { useMemo } from "react"
import Panel from "../Panel/Panel"
import PanelContent from "../Panel/PanelContent"
import PanelTitle from "../Panel/PanelTitle"

interface contactsList {
    name:string
    link:string
}

const ContactList:Array<contactsList> = [
    {name:"Github",link:""},
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


