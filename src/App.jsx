import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Experience } from "./components/Experience";
import * as THREE from "three";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import New from './New';
import NewSecond from "./NewSecond";

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/new" element={<New />} ></Route>
        <Route path="/new1" element={<NewSecond />} ></Route>
      </Routes>
    </BrowserRouter>
      <Canvas
        shadows
        camera={{
          // position: [0, 3, 9],
          position: [4, 8, 8],
          fov: 42,
        }}
      >
        <color attach="background" args={["#15151a"]} />
        <Experience />
        <EffectComposer>
          <Bloom
            mipmapBlur
            luminanceThreshold={1}
            intensity={1.42}
            radius={0.72}
          />
        </EffectComposer>
      </Canvas>
    </>
  );
}

export default App;
