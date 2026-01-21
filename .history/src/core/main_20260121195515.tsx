import { Canvas } from "@react-three/fiber";


const AMBIENT_LIGHT:number = 0.1;
const AMBIENT_COLOR:Array<number> = [255,255,255];

// fonction principale 
const Main = ({

}) => {

    return (
        <div className="h-screen w-screen">
            <Canvas >

                <mesh position={[0,0,-10]}>
                    <boxGeometry args={[2, 2, 2]} />
                    <meshPhongMaterial />
                </mesh>

                <ambientLight intensity={AMBIENT_LIGHT} color={[255,255,255]} />
                <directionalLight position={[0, 0, 5]} color="#fff" />
            </Canvas>
        </div>
    )
}


export default Main;