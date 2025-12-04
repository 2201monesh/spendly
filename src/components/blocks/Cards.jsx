import React from "react";

function Cards({ heading, amount, logo }) {
  return (
    <div className="w-72 h-24 rounded-xl p-4 border dark:bg-[#18181b]">
      <div className="flex items-center">
        <span className="mr-2">{logo}</span>
        <span>{heading}</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-3xl">
          ₹ {Number(amount).toLocaleString("en-IN")}
        </span>
        <span className="text-sm">AI calculate</span>
      </div>
    </div>
  );
}

export default Cards;
