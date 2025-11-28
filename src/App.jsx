import { useEffect, useState } from "react";

export default function App() {
  const [theme, setTheme] = useState(() => {
    // load saved theme
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">My Card</h1>

      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-800"
      >
        Toggle Theme
      </button>
    </div>
  );
}
