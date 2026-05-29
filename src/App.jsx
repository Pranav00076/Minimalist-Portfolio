import "./App.css";
import LightRays from "./components/LightRays/LightRays";
import Home from "./components/Home/Home";
import Navbar from "./components/Nav/Nav";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="app-wrapper">
      {/* Background rays */}
      <div className="light-rays-bg">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1}
          lightSpread={0.5}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          className="custom-rays"
          pulsating={false}
          fadeDistance={1}
          saturation={1}
        />
      </div>

      {/* Foreground content */}
      <div className="content">
        <Navbar />
        <Home />
        <Project />
        <Contact />
      </div>
    </div>
  );
}

export default App;