import { extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import Fragment from "../shaders/fragment.glsl";
import Vertex from "../shaders/vertex.glsl";
import * as THREE from "three";
import { useRef } from "react";
const ShaderMat = shaderMaterial(
  {
    uTime: 0,
    uResolution: new THREE.Vector2(),
    uDisplace: 4.0,
    uSpread: 10.5,
    uNoise: 16,
  },
  Vertex,
  Fragment
);
extend({ ShaderMat });
extend({ Vertex });
extend({ Fragment });

// console.log(uTime);
export default function Box(props) {
    const ref = useRef();

    useFrame((state) => {
      if (ref.current) {
        ref.current.uTime = state.clock.elapsedTime;
      }
    });

  return (
      <mesh position={[0, 8, 0]}>
        <sphereGeometry />
        <shaderMat
          ref={ref}
        />
      </mesh>
  );
}
