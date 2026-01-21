import { Canvas } from "@react-three/fiber";


const AMBIENT_LIGHT:number = 0.1;
const AMBIENT_COLOR:Array<number> = [255,255,255];

const BACKGROUND_COLOR:string = "#";

// fonction principale 
const Main = ({

}) => {

    return (
        <div className="h-screen w-screen">
            <Canvas 
                shadows={true}
            >

                

                <ambientLight intensity={AMBIENT_LIGHT} color={AMBIENT_COLOR} />
            </Canvas>
        </div>
    )
}


export default Main;