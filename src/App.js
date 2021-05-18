import React from "react";
import "./App.css";
import react from "./react.svg";
import Box from "./components/Box";

function App() {
  return (
    <div className="App">
      <img src={react} alt="react" />
      Hello from App
      <Box />
    </div>
  );
}

export default App;
