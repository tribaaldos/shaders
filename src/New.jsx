import { Canvas } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";

import { extend } from "@react-three/fiber";
const ShaderTest = shaderMaterial(
  {},
  // vertex shader
  /*glsl*/ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,
  // fragment shader
  /*glsl*/ `
  uniform float time;
  uniform vec3 color;
  varying vec2 vUv;
  void main() {
    gl_FragColor.rgba = vec4(0.1 + 0.3 * sin(vUv.yxx + time) + color, 1.0);
  }
`
);

extend({ ShaderTest });
export default function New() {
  return (
    <Canvas>
      <OrbitControls />
      <mesh>
        <boxGeometry />
        <shaderTest key={ShaderTest.key} />
      </mesh>
    </Canvas>
  );
}
