import React, { useRef } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls, Text, useTexture } from "@react-three/drei";
import * as THREE from "three";

const StudentCard = () => {
  const cardRef = useRef();

  // Tải các texture
  const avatarTexture = useTexture("https://avatars.githubusercontent.com/u/153719290?v=4");
  const qrCodeTexture = useTexture("https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://yourprofile.com");

  // Xoay thẻ
  useFrame(() => {
    if (cardRef.current) {
      cardRef.current.rotation.y += 0.003;
    }
  });

  return (
    <group ref={cardRef}>
      {/* Mặt sau của thẻ */}
      <mesh position={[0, 0, -0.025]}>
        <planeGeometry args={[2.4, 1.4]} />
        <meshStandardMaterial color="#444" />
      </mesh>

      {/* Mặt trước của thẻ */}
      <mesh position={[0, 0, 0.025]}>
        <planeGeometry args={[2.4, 1.4]} />
        <meshStandardMaterial color="#444" />
      </mesh>

      {/* Cạnh của thẻ */}
      <mesh position={[1.2, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[0.05, 1.4]} />
        <meshStandardMaterial color="#333" />
      </mesh>

      <mesh position={[-1.2, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[0.05, 1.4]} />
        <meshStandardMaterial color="#333" />
      </mesh>

      <mesh position={[0, 0.7, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2.4, 0.05]} />
        <meshStandardMaterial color="#333" />
      </mesh>

      <mesh position={[0, -0.7, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2.4, 0.05]} />
        <meshStandardMaterial color="#333" />
      </mesh>

      {/* Avatar */}
      <mesh position={[-0.7, 0.2, 0.026]}>
        <planeGeometry args={[0.8, 0.8]} />
        <meshStandardMaterial map={avatarTexture} transparent />
      </mesh>

      {/* QR Code */}
      <mesh position={[0.8, 0.4, 0.026]}>
        <planeGeometry args={[0.4, 0.4]} />
        <meshStandardMaterial map={qrCodeTexture} transparent />
      </mesh>

      {/* Tên */}
      <Text
        position={[-0.7, -0.4, 0.026]}
        fontSize={0.1}
        color="#ffffff"
        anchorX="left"
        anchorY="middle"
        maxWidth={1.5}
      >
        Nguyễn Minh Tâm
      </Text>

      {/* Chức danh */}
      <Text
        position={[-0.7, -0.55, 0.026]}
        fontSize={0.07}
        color="#cccccc"
        anchorX="left"
        anchorY="middle"
        maxWidth={1.5}
      >
        Software Engineer
      </Text>

      {/* Trường học */}
      <Text
        position={[-0.7, -0.65, 0.026]}
        fontSize={0.05}
        color="#aaaaaa"
        anchorX="left"
        anchorY="middle"
        maxWidth={1.5}
      >
        Ho Chi Minh City University of Technology
      </Text>
    </group>
  );
};

const StudentCard3DViewer = () => {
  return (
    <div style={{ width: "100%", height: "600px", background: "#121212" }}>
      <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[2, 2, 2]} intensity={1.2} />
        <StudentCard />
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
};

export default StudentCard3DViewer;