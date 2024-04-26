import React from "react";

function Data({ id, name, nextData }) {
  const handleNext = () => {
    let newData = {
      id: id,
      name: name,
    };
    nextData(newData);
  };
  return (
    <div>
      <span>{name}</span>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default Data;
