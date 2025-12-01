import Cards from "@/components/blocks/Cards";
import ChartAreaInteractive from "@/components/charts/ChartAreaInteractive";
import React from "react";
import { BiMoneyWithdraw } from "react-icons/bi";
import { PiChartLineUp, PiChartLineDown } from "react-icons/pi";

import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", income: 4000, expense: 2400 },
  { name: "Feb", income: 3000, expense: 1398 },
  { name: "Mar", income: 5000, expense: 2800 },
  { name: "Apr", income: 4780, expense: 1908 },
  { name: "May", income: 5890, expense: 4800 },
  { name: "Jun", income: 4390, expense: 3800 },
];

function Overview() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Cards Section */}
      <div className="flex gap-4 mb-8">
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
