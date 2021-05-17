import React from "react";
import "./App.css";
import Card from "./components/Card";
import react from "./react.svg";

function App() {
  return (
    <div className="App">
      <div className="top">
        <img className="react_svg" src={react} alt="react" />
      </div>
      <Card />
    </div>
  );
}

export default App;
