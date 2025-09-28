
import ThreeSceneWrapper from "./ThreeSceneWrapper";
export default function TextPage() {
  return (
    <div className="h-screen w-screen">
      <ThreeSceneWrapper />
      
      <div className="absolute top-4 left-10 text-base text-black">
        <p>three.js concept learning :- @react-three/fiber Libray of three js to use jsx format three js in next js </p>
        <p> Scene camera renderer </p>
        <p>Canvas, camera position , object and geometry , ambient intensity, </p>
        <p>orbit control ,mouse click , scroll </p>
        <p>here is small demo about learing</p>
        <p>name 3d effect zoom , rotate </p>

      </div>
    </div>
  );
}