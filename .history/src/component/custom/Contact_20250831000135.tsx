import { useMemo } from "react"
import Panel from "../Panel/Panel"
import PanelContent from "../Panel/PanelContent"
import PanelTitle from "../Panel/PanelTitle"

interface contactsList {
    name:string
    link:string,
    alias:string
}

const ContactList:Array<contactsList> = [
    {name:"Github",link:"https://github.com/Iban-del",alias:"github.com/Iban-del"},
    {name:"Linkedin",link:"https://www.linkedin.com/in/iban-deletoille-elizalde-2a5780335",alias:"iban-deletoille-elizalde"},
    {name:"Mail",link:"mailto:deletoilleelizaldeiban@gmail.com",alias:"deletoilleelizaldeiban@gmail.com"},
    {name:"Discord",link:"https://discordapp.com/users/764769604635459584",alias:"@Bouboune"},
]

const Contact = () =>{

    const ContactListComponents = useMemo(()=>{
        return ContactList.map((el)=>{
            return <pre key={"contact-"+Math.random()}>{el.name}: <a className="underline" href={el.link}>{el.alias}</a></pre>
        })
    },[])   

    return (
        <div>
            <Panel>
                <PanelTitle title="$ cat /contact.txt"/>
                <PanelContent>
                    {ContactListComponents}
                </PanelContent>
            </Panel>
        </div>

    )
}

export default Contact


