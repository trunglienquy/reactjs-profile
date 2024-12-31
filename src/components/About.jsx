import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { useRef } from "react";
import { ABOUT } from "../constants";
import { motion } from "framer-motion";

const RotatingModel = () => {
  const { scene } = useGLTF("/scene.gltf");
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.001;
    }
  });

  return <primitive object={scene} ref={modelRef} />;
};

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5, delay: 0 }}
        className="my-20 text-center text-4xl"
      >
        Một chút về tôi...
      </motion.h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, delay: 0 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center cursor-grab">
            <Canvas
              camera={{ position: [-180, 100, 500], fov: 50 }}
              style={{
                height: "500px",
                width: "500px",
              }}
            >
              <ambientLight />
              <OrbitControls />
              <RotatingModel />
              <Environment preset="city" />
            </Canvas>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5, delay: 0 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="mt-8">{ABOUT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
