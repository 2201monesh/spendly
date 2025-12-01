import Cards from "@/components/blocks/Cards";
import ChartAreaInteractive from "@/components/charts/ChartAreaInteractive";
import React from "react";
import { BiMoneyWithdraw } from "react-icons/bi";
import { PiChartLineUp, PiChartLineDown } from "react-icons/pi";

function Overview() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Cards Section */}
      <div className="flex w-full justify-between items-center">
        <Cards heading="Total Balance" logo={<BiMoneyWithdraw size={30} />} />
        <Cards heading="Total Expense" logo={<PiChartLineDown size={30} />} />
        <Cards heading="Total Income" logo={<PiChartLineUp size={30} />} />
      </div>

      <div className="w-full">
        <ChartAreaInteractive />
      </div>
    </div>
  );
}

export default Overview;
