import { Canvas, useThree } from "@react-three/fiber";
import { Cloud, Clouds, Sky, Sparkles, Stars, shaderMaterial } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";

import newFragment from "./shaders/new-fragment.glsl";
import newVertex from "./shaders/new-vertex.glsl";

// import stripesVertex from "./shaders/stripes.vertex.glsl";
// import stripesFragment from "./shaders/stripes.fragment.glsl";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { extend } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { Text3D } from "@react-three/drei";
import Font from "../Roboto_Bold Italic.json";
const ShaderTest = shaderMaterial(
  {
    uTime: 0,
    uColorStart: new THREE.Color("#ffffff"),
    uColorEnd: new THREE.Color("#000000"),
  },
  // vertex shader
  newVertex,
  // stripesVertex,
  // fragment shader
  newFragment
  // stripesFragment
);

extend({ ShaderTest });
extend({ OrbitControls });

const Box = () => {
  const ref = useRef();
  const { camera } = useThree();

  useFrame((state) => {
    if (ref.current) {
      ref.current.uTime = state.clock.elapsedTime;
    }
  });

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <sphereGeometry />
      <shaderTest key={ShaderTest.key} ref={ref} />
    </mesh>
  );
};

export default function New(props) {
  return (
    <Canvas>
      {/* <Suspense>
        <group {...props} dispose={null}>
          <Sparkles
            color={"darkblue"}
            count={300}
            size={20}
            scale={[20, 20, 20]}
          />
          <Stars />
          <Sky />
          <Text3D font={Font}>
            R3F
            <meshNormalMaterial />
          </Text3D>
          <Text3D font={Font} position-y={-1}>
            Drei
            <meshNormalMaterial />
          </Text3D>
          <Clouds material={THREE.MeshBasicMaterial}>
            <Cloud
              segments={40}
              bounds={[10, 2, 2]}
              volume={10}
              color="orange"
            />
            <Cloud seed={1} scale={2} volume={5} color="hotpink" fade={100} />
          </Clouds>
          </group>
        </Suspense> */}
        <OrbitControls />
         <Box />
    </Canvas>
  );
}
