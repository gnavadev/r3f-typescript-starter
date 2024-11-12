import './App.css'
import {Canvas, useFrame} from "@react-three/fiber";
import {useRef} from "react";
import {Mesh} from "three";

function Box() {
    const boxRef = useRef<Mesh>(null)

    useFrame(() => {
        if (boxRef.current) {
            boxRef.current.rotation.x += 0.01
            boxRef.current.rotation.y += 0.01
        }
    });

    return (
        <mesh ref={boxRef}>
            <boxGeometry args={[1, 1, 1]} />
            <meshNormalMaterial />
        </mesh>
    )
}

function ThreeScene() {
    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Box />
        </Canvas>
    )
}

function App() {
    return (
        <div className={"App h-screen"}>
            <h1 className={"text-3xl font-bold bg-green-300"}>Hello</h1>
            <ThreeScene />
        </div>
    );
}

export default App
