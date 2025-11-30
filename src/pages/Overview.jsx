import Cards from "@/components/blocks/Cards";
import React from "react";
import { BiMoneyWithdraw } from "react-icons/bi";
import { PiChartLineUp } from "react-icons/pi";
import { PiChartLineDown } from "react-icons/pi";

function Overview() {
  return (
    <div className="flex justify-center ">
      <div className="flex gap-4">
        <Cards heading="Total Balance" logo={<BiMoneyWithdraw size={30} />} />
        <Cards heading="Total Expense" logo={<PiChartLineDown size={30} />} />
        <Cards heading="Total Income" logo={<PiChartLineUp size={30} />} />
      </div>
    </div>
  );
}

export default Overview;
