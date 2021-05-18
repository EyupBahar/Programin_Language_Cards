import React from "react";
import "./App.css";
import Card from "./components/Card";
import react from "./react.svg";

function App() {
  return (
    <div className="App">
      <img src={react} alt="react" />
      Hello from App
      <Card />
    </div>
  );
}

export default App;
