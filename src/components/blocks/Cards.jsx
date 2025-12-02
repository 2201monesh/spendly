import React from "react";

function Cards({ heading, amount, logo }) {
  return (
    <div className="w-96 h-32 rounded-xl p-3 border dark:bg-[#18181b]">
      <h1 className="font-geist text-md mt-1">{heading}</h1>
      <div className="flex justify-between items-center mt-2">
        <span className="text-4xl">₹ {amount}</span>
        <span>{logo}</span>
      </div>
      <span className="text-xs">some random text</span>
    </div>
  );
}

export default Cards;
