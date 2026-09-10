'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, PerspectiveCamera, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

function Particles() {
  const count = 1000;
  const mesh = useRef<THREE.InstancedMesh>(null);
  const light = useRef<THREE.PointLight>(null);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const xFactor = -50 + Math.random() * 100;
      const yFactor = -50 + Math.random() * 100;
      const zFactor = -50 + Math.random() * 100;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;

      t = particle.t += speed / 2;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);

      particle.mx += (state.pointer.x * 10 - particle.mx) * 0.01;
      particle.my += (state.pointer.y * 10 - particle.my) * 0.01;

      dummy.position.set(
        (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      );
      dummy.scale.set(s, s, s);
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();

      if (mesh.current) {
        mesh.current.setMatrixAt(i, dummy.matrix);
      }
    });
    if (mesh.current) {
        mesh.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <>
      <pointLight ref={light} distance={40} intensity={8} color="lightblue" />
      <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
        <dodecahedronGeometry args={[0.2, 0]} />
        <meshStandardMaterial color="#333333" roughness={0.1} metalness={0.8} />
      </instancedMesh>
    </>
  );
}

export default function Hero3D() {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={75} />
          <ambientLight intensity={0.5} />
          <Environment preset="city" />
          <Particles />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        </Canvas>
      </div>

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mix-blend-difference"
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-4">
            Creative<br />Developer
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-wide text-gray-300">
            Crafting Digital Experiences
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white opacity-50 animate-bounce">
        <p className="text-sm uppercase tracking-widest">Scroll Down</p>
      </div>
    </div>
  );
}
