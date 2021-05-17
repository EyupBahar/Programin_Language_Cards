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
    <div className="Main_box" onClick={handleClick}>
      {!visible ? (
        <>
          <div className="Card_box">
            <img src={dummyImg} alt="cpp" />
            <p>Cpp</p>
          </div>
        </>
      ) : null}
    </div>
  );
}
