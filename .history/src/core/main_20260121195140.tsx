import { Canvas } from "@react-three/fiber";


const AMBIENT_LIGHT:number = 0.1;


// fonction principale 
const Main = ({

}) => {

    return (
        <div className="h-screen w-screen">
            <Canvas >
                <ambientLight intensity={} />

            </Canvas>
        </div>
    )
}


export default Main;