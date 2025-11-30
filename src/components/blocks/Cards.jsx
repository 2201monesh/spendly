import React from "react";

function Cards({ heading, logo }) {
  return (
    <div className="w-96 h-32 rounded-sm p-3 border">
      <h1 className="font-geist text-md mt-1">{heading}</h1>
      <div className="flex justify-between items-center mt-2">
        <span className="text-4xl">90,000</span>
        <span>{logo}</span>
      </div>
    </div>
  );
}

export default Cards;
