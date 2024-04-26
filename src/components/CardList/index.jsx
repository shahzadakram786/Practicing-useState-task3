import React from "react";
import Data from "../Data";

function CardList({ data, nextData }) {
  return (
    <div>
      {data.map((item, index) => {
        return <Data {...item} nextData={nextData } />;
      })}
    </div>
  );
}

export default CardList;
