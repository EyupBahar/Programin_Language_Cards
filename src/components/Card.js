import React from "react";
import "./Card.css";
import dummyImg from "../assets/cpp.png";
import { useState } from "react";

export default function Card() {
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible(!visible);
  };
  return (
    <div onClick={handleClick}>
      {!visible ? (
        <>
          <div className="Langcard">
            <img className="logo" src={dummyImg} alt="cpp" />
            <p>Cpp</p>
          </div>
        </>
      ) : (
        <ul>
          <li>dfd</li>
          <li>fds</li>
          <li>fd</li>
        </ul>
      )}
    </div>
  );
}
