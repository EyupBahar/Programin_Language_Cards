import React from "react";
import Categories from "../helper/data";
import Card from "./Card";

export default function Box() {
  return (
    <div className="cover">
      {Categories.map((element) => (
        <Card
          logo={element.img}
          name={element.name}
          desc={element.options[0]}
          date={element.options[1]}
          author={element.options[2]}
        />
      ))}
    </div>
  );
}
