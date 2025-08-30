import { useMemo } from "react"
import Panel from "../Panel/Panel"
import PanelContent from "../Panel/PanelContent"
import PanelTitle from "../Panel/PanelTitle"

interface contactsList {
    name:string
    link:string
}

const ContactList:Array<contactsList> = [
    {name:"Github",link:"https://github.com/Iban-del"},
    {name:"Linkedin",link:"https://www.linkedin.com/in/iban-deletoille-elizalde-2a5780335"},
    {name:"Mail",link:"mailto:deletoilleelizaldeiban@gmail.com"},
    {name:"Discord",link:"https://discordapp.com/users/764769604635459584"},
]

const Contact = () =>{

    const ContactListComponents = useMemo(()=>{
        return ContactList.map((el)=>{
            return <pre key={"skill-"+Math.random()}>{el.name}:&nbsp; <a href={el.link}>{el.link}</a></pre>
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


