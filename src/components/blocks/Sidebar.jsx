import React from "react";
import { MdDashboardCustomize } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { BiSolidPieChartAlt2 } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className="w-64 h-screen border dark:bg-[#18181b]">
      <div className="p-3 h-14 border-b ">
        <h1 className="text-3xl font-bold font-instrument px-1.5 text-[#635cff]">
          Spendly
        </h1>
      </div>
      <div className="p-3 mt-2 flex flex-col">
        <span className="mb-2 px-1.5 font-geist">General</span>
        <span
          className="font-geist border rounded-sm text-sm mb-2 cursor-pointer py-1.5 px-1.5 hover:bg-[#f5f5f5] dark:hover:bg-[#1c1c20] flex items-center"
          onClick={() => navigate("/dashboard")}
        >
          <MdDashboardCustomize size={14} className="mt-0.5 mr-2" />
          Dashboard
        </span>
        <span className="font-geist border rounded-sm text-sm mb-2 cursor-pointer py-1.5 px-1.5 hover:bg-[#f5f5f5] dark:hover:bg-[#1c1c20] flex items-center">
          <IoIosAddCircle size={14} className="mt-0.5 mr-2" />
          Add Expense
        </span>
        <span
          className="font-geist border rounded-sm text-sm mb-2 cursor-pointer py-1.5 px-1.5 hover:bg-[#f5f5f5] dark:hover:bg-[#1c1c20] flex items-center"
          onClick={() => navigate("/dashboard/analytics")}
        >
          <BiSolidPieChartAlt2 size={14} className="mt-0.5 mr-2" />
          Analytics
        </span>
        <span className="font-geist border rounded-sm text-sm mb-2 cursor-pointer py-1.5 px-1.5 hover:bg-[#f5f5f5] dark:hover:bg-[#1c1c20] flex items-center">
          <IoMdSettings size={14} className="mt-0.5 mr-2" />
          Settings
        </span>
      </div>
    </div>
  );
}

export default Sidebar;
