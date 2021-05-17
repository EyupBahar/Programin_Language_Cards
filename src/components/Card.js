import React from "react";
import "./Card.css";
import dummyImg from "../assets/cpp.png";
import { useState } from "react";

export default function Card({ logo, name, desc, author, date }) {
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
          </div>
          <div>
            <p>Cpp</p>
          </div>
        </>
      ) : (
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      )}
    </div>
  );
}
