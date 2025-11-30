import { useTheme } from "@/context/ThemeContext";
import React from "react";

const ToggleSwitch = () => {
  const { theme, toggleTheme } = useTheme();
  const isChecked = theme === "dark";

  return (
    <label className="themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={toggleTheme}
        className="sr-only"
      />

      <span
        className={`
          slider mx-3 flex 
          h-6 w-[46px]               /* smaller height + width */
          items-center 
          rounded-full p-1 
          duration-200 
          ${isChecked ? "bg-[#212b36]" : "bg-[#CCCCCE]"}
        `}
      >
        <span
          className={`
            dot 
            h-4 w-4                 /* smaller dot */
            rounded-full bg-white 
            duration-200 
            ${isChecked ? "translate-x-[20px]" : ""}
          `}
        ></span>
      </span>
    </label>
  );
};

export default ToggleSwitch;
