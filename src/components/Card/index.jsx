import React from "react";
import CardList from "../CardList";

function Card({ data, nextData }) {
  return (
    <div
      style={{
        border: "2px solid red",
      }}
    >
      <CardList data={data} nextData={nextData} />
    </div>
  );
}

export default Card;
