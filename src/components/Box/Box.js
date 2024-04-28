import React, { useState } from "react";
// import Card from "../card/Card";

const Box = () => {
  const [boxes, setBoxes] = useState([
    [
      { text: "Shahzain", buttons: ["Next"] },
      { text: "Shahzad", buttons: ["Next"] },
      { text: "aliabbas", buttons: ["Next"] }
    ],
    [],
    [],
  ]);

  const handleNextClick = (boxIndex, cardIndex) => {
    const newBoxes = [...boxes];
    const card = newBoxes[boxIndex].splice(cardIndex, 1)[0];
    newBoxes[boxIndex + 1].push({ ...card, buttons: ["Previous", "Next"] });
    setBoxes(newBoxes);
  };

  const handlePreviousClick = (boxIndex, cardIndex) => {
    const newBoxes = [...boxes];
    const card = newBoxes[boxIndex].splice(cardIndex, 1)[0];
    newBoxes[boxIndex - 1].push({ ...card, buttons: ["Next"] });
    setBoxes(newBoxes);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        border: "2px solid black",
        width: "100%",
        justifyContent: "space-evenly",
      }}
    >
      {boxes.map((box, boxIndex) => (
        <div
          key={boxIndex}
          style={{ border: "2px solid black", padding: "10px", height: "50vh" ,width:"300px"}}
        >
          <h2>Box {boxIndex + 1}</h2>
          {box.map((card, cardIndex) => (
            <div key={cardIndex} style={{ width: "300px" }}>
              <p>{card.text}</p>
              {card.buttons.map((button, buttonIndex) => (
                <button
                  key={buttonIndex}
                  onClick={() =>
                    button === "Next"
                      ? handleNextClick(boxIndex, cardIndex)
                      : handlePreviousClick(boxIndex, cardIndex)
                  }
                >
                  {button}
                </button>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Box;
