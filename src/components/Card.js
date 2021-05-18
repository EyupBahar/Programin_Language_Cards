import React from "react";
import "./Card.css";
import { useState } from "react";

export default function Card({ logo, name, desc, date, author }) {
  // ! Bu satırda car({}) içindeki elementler birer props ev box js içerisinden props ile bu isimlerle bilgileri çektik. Aynı js içinde hem bilgiyi çekip (data.js) hem de map edilemiyor. Bunun için Box.js içinde map ederek card.js de çağırdık...
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible(!visible);
  };
  return (
    <div className="container" onClick={handleClick}>
      {!visible ? (
        <>
          <div className="Langcard">
            <img src={logo} alt="logo" className="logo" />
            <p>{name}</p>
          </div>
        </>
      ) : (
        <div className="list_side">
          <ul>
            <li>{desc}</li>
            <li>{date}</li>
            <li>{author}</li>
          </ul>
        </div>
      )}
    </div>
  );
}
