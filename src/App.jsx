import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { useTheme } from "./context/ThemeContext";
import Home from "./pages/Home";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
