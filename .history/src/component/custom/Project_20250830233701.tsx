import { useMemo } from "react"
import Panel from "../Panel/Panel"
import PanelContent from "../Panel/PanelContent"
import PanelTitle from "../Panel/PanelTitle"

interface projectList {
    name:string,
    content:string
}

const ProjectList: projectList[] = [
    {
        name: "Labyrinthe",
        content: "Ce projet en Python consiste à générer automatiquement un labyrinthe aléatoire, puis à le résoudre grâce à l’algorithme A*."
    },
    {
        name: "Gestion Enseignants",
        content: "Ce projet vise à faciliter la gestion des plannings, des cours et des affectations des enseignants dans un cadre universitaire à l’aide de technologies web robustes et dynamiques."
    },
    {
        name: "Coeur Applicatif",
        content: "Développement d’un socle applicatif modulaire et maintenable, conçu pour accélérer la mise en place de futurs projets tout en assurant une base solide et cohérente."
    },
    {
        name: "PortFolio",
        content: "Un site web personnel conçu pour refléter mes compétences techniques, mon identité visuelle et mes réalisations, avec une navigation fluide et une interface moderne."
    },
    {
        name: "ServerRoomFan",
        content: "Système intelligent combinant automatisation physique et interface web pour surveiller et réguler la température d’une salle serveur, garantissant sécurité et efficacité énergétique."
    },
    {
        name: "Interface d'image",
        content: "Une petite interface permettant de modifier une image en appliquant différents filtres. Elle offre un aperçu en temps réel des changements, avec la possibilité de comparer facilement la version originale et la version modifiée."
    }
];

const Project = () =>{

    const ProjectListComponents = useMemo(()=>{
        return ProjectList.map((el)=>{
            return (
                <div key={"project-"+Math.random()} className=" m-2 p-2">
                    # {el.name}: {el.content}
                </div>
            )
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


