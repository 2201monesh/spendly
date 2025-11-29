import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Button } from "@/components/ui/button.jsx";

function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className="
        min-h-screen 
        bg-white dark:bg-black 
        text-black dark:text-white 
        flex flex-col items-center justify-center 
        relative
      "
    >
      {/* Horizontal dashed line */}
      <div
        className="
          absolute top-1/12 left-0 
          w-full 
          border-t-2 border-dashed 
          border-gray-400 dark:border-gray-600
        "
      />
      <div
        className="
          absolute bottom-1/12 left-0 
          w-full 
          border-t-2 border-dashed 
          border-gray-400 dark:border-gray-600
        "
      />

      {/* Vertical dashed line */}
      <div
        className="
          absolute left-1/12 top-0 
          h-full 
          border-l-2 border-dashed 
          border-gray-400 dark:border-gray-600
        "
      />

      <div
        className="
          absolute right-1/12 top-0 
          h-full 
          border-l-2 border-dashed 
          border-gray-400 dark:border-gray-600
        "
      />

      {/* Center content */}
      <div className="flex flex-col items-center gap-2 z-10 bg-transparent px-4">
        <h1 className="text-5xl font-bold font-instrument text-[#635cff]">
          Spendly
        </h1>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="
            mt-6 px-4 py-2 rounded 
            bg-gray-200 dark:bg-gray-800
          "
        >
          Toggle Theme ({theme})
        </button>

        <div className="flex gap-4 mt-6">
          <Button variant="outline" className="cursor-pointer">
            Signup
          </Button>
          <Button variant="outline" className="cursor-pointer">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
