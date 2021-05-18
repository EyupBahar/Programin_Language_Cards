import React from "react";
import "./App.css";
import react from "./react.svg";
import Box from "./components/Box";

function App() {
  return (
    <div className="App">
      <img src={react} alt="react" />
      <h3>LANGUAGE CARDS</h3>
      <Box />
    </div>
  );
}

export default App;
