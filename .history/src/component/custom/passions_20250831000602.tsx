import { useMemo } from "react"
import Panel from "../Panel/Panel"
import PanelContent from "../Panel/PanelContent"
import PanelTitle from "../Panel/PanelTitle"

interface passionsList {
    content:string
}

const PassionsList:Array<passionsList> = [
    {content:"Apprendre de nombreuses choses"},
    {content:"Développer tous et n'importe quoi"},
    {content:"La fantaisy/dark fantaisy"},
    {content:"Le machine learning"},
]

const Passions = () =>{
    
    const PassionsListComponents = useMemo(()=>{
        return PassionsList.map((el)=>{
            return (
                <div key={"passions-"+Math.random()} className="p-1">
                    <p># {el.content}</p>
                </div>
            )
        })
    },[])   

    return (
        <article className="p-1 md:p-5">
            <Panel >
                <PanelTitle title="$ cat /Activities_Passions.txt"/>
                <PanelContent>
                    {PassionsListComponents}
                </PanelContent>
            </Panel>
        </article>
    )
}

export default Passions


