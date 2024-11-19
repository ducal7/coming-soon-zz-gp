import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';

const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-5">
      <h1 className="text-4xl sm:text-6xl font-bold text-gradient mb-6">
        Vizuelo
      </h1>
      <p className="text-center max-w-2xl text-lg sm:text-xl">
        Trusted partner in advanced analytics & AI. Unlock data's full potential!
      </p>
      <div className="w-full h-[300px] mt-10">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} />
          <OrbitControls enableZoom={false} />
          <Sphere args={[1, 32, 32]} scale={2.5}>
            <meshStandardMaterial
              attach="material"
              color="url(#gradient)"
              metalness={0.6}
              roughness={0.1}
            />
          </Sphere>
        </Canvas>
      </div>
      <p className="mt-10 text-sm text-gray-400">Launching in 2024</p>
      <button className="mt-6 px-6 py-3 bg-gradient-to-r from-gradientStart to-gradientEnd text-darkBlue font-bold rounded-md shadow-lg">
        Notify Me
      </button>
    </div>
  );
};

export default ComingSoon;