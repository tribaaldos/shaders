import { OrbitControls, shaderMaterial } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { extend } from "@react-three/fiber";

import SecondVertex from "./shaders/second.vertex.glsl";
import SecondFragment from "./shaders/second.fragment.glsl";

import * as THREE from "three";

const ShaderSecond = shaderMaterial(
  {
    u_time: { value: 0 },

    u_color: { value: new THREE.Color(0xff0000) },
  },
  SecondVertex,
  SecondFragment
);

extend({ ShaderSecond });

const ShaderMaterial = () => {
  return (
    <mesh>
      <planeGeometry args={[3, 3]} />
      <shaderSecond key={ShaderSecond.key} />
    </mesh>
  );
};

export default function NewSecond() {
  return (
    <Canvas>
      <OrbitControls />
      <ShaderMaterial />
    </Canvas>
  );
}