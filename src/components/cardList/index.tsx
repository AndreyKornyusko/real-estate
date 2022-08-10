import React from "react";
import Card from "../card";
import properties from "../../properties.json";

const CardList = () => {
  return (
    <div>
      {properties &&
        properties.map((item, index) => (
          <div key={index}>
            <Card cardItem={item} />
          </div>
        ))}
    </div>
  );
};
export default CardList;
