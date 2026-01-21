import { Canvas } from "@react-three/fiber";


const AMBIENT_LIGHT:number = 0.1;


// fonction principale 
const Main = ({

}) => {

    return (
        <div className="h-screen w-screen">
            <Canvas >

                <mesh>
                    <boxGeometry args={[2, 2, 2]} />
                    <meshPhongMaterial />
                </mesh>

                <ambientLight intensity={AMBIENT_LIGHT} color={Color} />
                <directionalLight position={[0, 0, 5]} color="#fff" />
            </Canvas>
        </div>
    )
}


export default Main;