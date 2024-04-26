import React from "react";
import Card from "../../components/Card";
import { arr1, arr2, arr3 } from "../../components/Card/arrays";

function MainPage() {
  const nextData = (info) => {
    console.log(info);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        background:"grey"
      }}
    >
      <Card data={arr1} nextData={nextData} />
      <Card data={arr2} nextData={nextData} />
      <Card data={arr3} nextData={nextData} />
    </div>
  );
}
 
export default MainPage;



