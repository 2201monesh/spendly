import { useTheme } from "./context/ThemeContext";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">My Card</h1>

      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-800"
      >
        Toggle Theme ({theme})
      </button>
    </div>
  );
}
