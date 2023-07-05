import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal, // for useTexture
  Float,
  OrbitControls, //be able to move it around
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  // https://docs.pmnd.rs/react-three-fiber/tutorials/loading-textures#using-usetexture

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      {/* float是React three drei裡面會漂浮的單元 */}
      <ambientLight intensity={0.25} /> 
      {/* 環境光 */}
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} /> 
        {/* 就是這個多角形 灰色的底*/}

        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          // specifies the scale factors and units to calculate depth values
          polygonOffsetFactor={-5}
          flatShading
        />
{/* 表面的漸層白色 */}

        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
