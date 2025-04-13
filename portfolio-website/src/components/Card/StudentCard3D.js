import React, { useRef } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import * as THREE from "three";

const StudentCard = () => {
  const cardRef = useRef();

  // Tải các texture
  const avatarTexture = useLoader(THREE.TextureLoader, "https://avatars.githubusercontent.com/u/153719290?v=4");
  const qrCodeTexture = useLoader(THREE.TextureLoader, "https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://yourprofile.com");

  // Màu sắc thẻ
  const cardColor = "#1a365d"; // Navy blue
  const cardEdgeColor = "#2c5282"; // Màu cạnh đậm hơn
  
  // Xoay thẻ
  useFrame(() => {
    if (cardRef.current) {
      cardRef.current.rotation.y += 0.003;
    }
  });

  // Màu sắc cho các khối công nghệ
  const techColors = {
    java: "#007396",
    spring: "#6DB33F",
    react: "#61DAFB",
    js: "#F7DF1E",
   
  };

  return (
    <group ref={cardRef}>
      {/* Mặt sau của thẻ */}
      <mesh position={[0, 0, -0.025]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[2.4, 1.4]} />
        <meshStandardMaterial color={cardColor} />
      </mesh>

      {/* Khối Java */}
      <mesh position={[0.9, 0.4, -0.024]} rotation={[0, Math.PI, 0]}>
        <boxGeometry args={[0.3, 0.3, 0.02]} />
        <meshStandardMaterial color={techColors.java} />
      </mesh>
      <Text
        position={[0.9, 0.4, -0.035]}
        fontSize={0.06}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        rotation={[0, Math.PI, 0]}
      >
        Java
      </Text>

      {/* Khối Spring */}
      <mesh position={[0.5, 0.4, -0.024]} rotation={[0, Math.PI, 0]}>
        <boxGeometry args={[0.3, 0.3, 0.02]} />
        <meshStandardMaterial color={techColors.spring} />
      </mesh>
      <Text
        position={[0.5, 0.4, -0.035]}
        fontSize={0.06}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        rotation={[0, Math.PI, 0]}
      >
        Spring
      </Text>

      {/* Khối React */}
      <mesh position={[0.1, 0.4, -0.024]} rotation={[0, Math.PI, 0]}>
        <boxGeometry args={[0.3, 0.3, 0.02]} />
        <meshStandardMaterial color={techColors.react} />
      </mesh>
      <Text
        position={[0.1, 0.4, -0.035]}
        fontSize={0.06}
        color="#000000"
        anchorX="center"
        anchorY="middle"
        rotation={[0, Math.PI, 0]}
      >
        React
      </Text>

      {/* Khối JavaScript */}
      <mesh position={[-0.3, 0.4, -0.024]} rotation={[0, Math.PI, 0]}>
        <boxGeometry args={[0.3, 0.3, 0.02]} />
        <meshStandardMaterial color={techColors.js} />
      </mesh>
      <Text
        position={[-0.3, 0.4, -0.035]}
        fontSize={0.06}
        color="#000000"
        anchorX="center"
        anchorY="middle"
        rotation={[0, Math.PI, 0]}
      >
        JS
      </Text>

   

      {/* Tiêu đề mặt sau */}
      <Text
        position={[0, 0.8, -0.024]}
        fontSize={0.12}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        rotation={[0, Math.PI, 0]}
      >
        Skills & Technologies
      </Text>

      {/* Thông tin bổ sung - mặt sau */}
      <Text
        position={[0, -0.2, -0.024]}
        fontSize={0.08}
        color="#e2e8f0"
        anchorX="center"
        anchorY="middle"
        maxWidth={2}
        textAlign="center"
        rotation={[0, Math.PI, 0]}
      >
        8 months experience in Java development
      </Text>

      <Text
        position={[0, -0.4, -0.024]}
        fontSize={0.08}
        color="#e2e8f0"
        anchorX="center"
        anchorY="middle"
        maxWidth={2}
        textAlign="center"
        rotation={[0, Math.PI, 0]}
      >
        Passionate about building web applications
      </Text>

      <Text
        position={[0, -0.6, -0.024]}
        fontSize={0.08}
        color="#e2e8f0"
        anchorX="center"
        anchorY="middle"
        maxWidth={2}
        textAlign="center"
        rotation={[0, Math.PI, 0]}
      >
        Contact: tam02112003@gmail.com
      </Text>

      {/* Mặt trước của thẻ */}
      <mesh position={[0, 0, 0.025]}>
        <planeGeometry args={[2.4, 1.4]} />
        <meshStandardMaterial color={cardColor} />
      </mesh>

      {/* Cạnh của thẻ */}
      <mesh position={[1.2, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[0.05, 1.4]} />
        <meshStandardMaterial color={cardEdgeColor} />
      </mesh>

      <mesh position={[-1.2, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[0.05, 1.4]} />
        <meshStandardMaterial color={cardEdgeColor} />
      </mesh>

      <mesh position={[0, 0.7, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2.4, 0.05]} />
        <meshStandardMaterial color={cardEdgeColor} />
      </mesh>

      <mesh position={[0, -0.7, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2.4, 0.05]} />
        <meshStandardMaterial color={cardEdgeColor} />
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
        position={[-0.7, -0.3, 0.026]}
        fontSize={0.1}
        color="#ffffff"
        anchorX="left"
        anchorY="middle"
        maxWidth={1.5}
      >
        Nguyễn Minh Tâm
      </Text>

      <Text
        position={[-0.7, -0.4, 0.026]}
        fontSize={0.05}
        color="#ffffff"
        anchorX="left"
        anchorY="middle"
        maxWidth={1.5}
      >
       ngminhtam02112003@gmail.com
      </Text>

      {/* Chức danh */}
      <Text
        position={[-0.7, -0.5, 0.026]}
        fontSize={0.07}
        color="#e2e8f0"
        anchorX="left"
        anchorY="middle"
        maxWidth={1.5}
      >
        Software Engineer
      </Text>

      {/* Trường học */}
      <Text
        position={[-0.7, -0.6, 0.026]}
        fontSize={0.05}
        color="#cbd5e0"
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
    <div style={{ width: "100%", height: "600px", background: "#ffffff" }}>
      <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
        <color attach="background" args={["#ffffff"]} />
        <ambientLight intensity={1.2} />
        <directionalLight position={[2, 2, 2]} intensity={1.2} />
        <StudentCard />
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
};

export default StudentCard3DViewer;