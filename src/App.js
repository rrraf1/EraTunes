import React from "react";
import { Canvas } from "@react-three/fiber";
import "./style/main.css";

import Background from "./components/background";
import Navbar from "./components/Navbar";
import Content from "./components/Content";

function App() {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Canvas
        gl={{
          preserveDrawingBuffer: true,
          premultipliedAlpha: false,
          alpha: true,
          transparent: true,
          antialias: true,
          precision: "highp",
          powerPreference: "high-performance",
        }}
        camera={{
          fov: 75,
          near: 0.1,
          far: 1000,
          position: [0, 0, 5],
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100vh",
          width: "100vw",
        }}
      >
        <Background standalone={false} />
      </Canvas>
      <Navbar />
      <Content />
      <main></main>
    </div>
  );
}

export default App;
