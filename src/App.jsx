import { Canvas, useFrame } from "@react-three/fiber";
import { Box } from "@react-three/drei";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useRef } from "react";

const App = () => {
	const BoxComponent = () => {
		const meshRef = useRef();
		useFrame(() => {
			meshRef.current.rotation.x += 0.01;
			meshRef.current.rotation.y += 0.01;
		});

		return <Box ref={meshRef} args={[2, 2, 2]} position={[0, 0, 0]} />;
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<div className="space-y-4">
				<img src={viteLogo} className="w-24" alt="Vite logo" />
				<img
					src={reactLogo}
					className="w-24"
					alt="React Three Fiber logo"
				/>
			</div>
			<h1 className="text-3xl font-bold mt-8">
				Welcome to React Three Fiber + Vite!
			</h1>
			<p className="text-gray-600 mt-4">
				Edit{" "}
				<code className="bg-gray-100 p-1 rounded-md">src/App.jsx</code>{" "}
				and save to test HMR.
			</p>
			<div className="mt-8">
				<Canvas>
					<ambientLight />
					<pointLight position={[10, 10, 10]} />
					<BoxComponent />
				</Canvas>
			</div>
			<p className="text-gray-600 mt-4">
				Click on the Vite and React Three Fiber logos to learn more!
			</p>
		</div>
	);
};

export default App;
