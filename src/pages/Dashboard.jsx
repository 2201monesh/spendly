import { BrowserRouter, Route, Router } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import Home from "./Home";

function Dashboard() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">Dashboard</h1>
    </div>
  );
}

export default Dashboard;
