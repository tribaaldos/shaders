import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Experience } from "./Experience";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import New from "./New";
import NewSecond from "./NewSecond";
import { Interface } from "./Interface";
import { useState } from "react";

function App() {
  const [section, setSection] = useState(0);
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/new" element={<New />} />
          <Route path="/new1" element={<NewSecond />} />
        </Routes>
      </BrowserRouter>
      <Canvas
        shadows
        camera={{
          position: [0, 10, 30],
          fov: 42,
        }}
      >
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
      <Interface section={section} onSectionChange={setSection}/>
    </>
  );
}

export default App;
