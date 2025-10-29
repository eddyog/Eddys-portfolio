import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("/desktop_pc/scene.gltf");

  return (
<mesh>
  {/* Ambient / Hemisphere Light */}
  <hemisphereLight intensity={1.4} groundColor='#0a0a0a' color='#ffffff' />

  {/* Key Light - main bright source */}
  <spotLight
    position={[-10, 20, 10]}
    angle={0.3}
    penumbra={0.5}
    intensity={4.5}
    color="#fff8e7"
    castShadow
    shadow-mapSize={2048}
  />

  {/* Fill Light - softer, opposite side to reduce harsh shadows */}
  <pointLight
    position={[10, 10, -10]}
    intensity={1.2}
    color="#b0c4de"
  />

  {/* Rim Light - behind and slightly above the object for outline separation */}
  <directionalLight
    position={[5, 10, -15]}
    intensity={5.2}
    color="#ffdca8"
  />

  {/* The Model */}
  <primitive
    object={computer.scene}
    scale={isMobile ? 0.7 : 0.75}
    position={isMobile ? [0, -4, -2.2] : [0, -3.25, -1.5]}
    rotation={[-0.01, -0.2, -0.1]}
  />
</mesh>

  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
        autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotateSpeed={2}

        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;