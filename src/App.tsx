import "../dist/output.css";
import NavBar from "./components/NavBar";
import Planet from "./components/Planet";
import HomePage from "./components/HomePage";
import { useState } from "react";

function App() {
  const [currentId, setCurrentId] = useState(0);

  const onPlanetClick = (id: number) => {
    setCurrentId(id);
  };

  console.log(currentId);
  
  return (
    <div className="min-h-screen bg-main-bg">
      <NavBar onPlanetClick={onPlanetClick}/>
      <HomePage />
      <Planet currentId={currentId}/>
    </div>
  );
}

export default App;
