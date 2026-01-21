import { Canvas } from "@react-three/fiber";





// fonction principale 
const Main = ({

}) => {

    return (
        <div className="h-screen w-screen">
            <Canvas >
                <ambientLight inten/>

            </Canvas>
        </div>
    )
}


export default Main;