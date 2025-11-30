import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { useTheme } from "./context/ThemeContext";
import Home from "./pages/Home";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import { LoginForm } from "./components/login-form";
import { SignupForm } from "./components/signup-form";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import Overview from "./pages/Overview";
import Analytics from "./pages/Analytics";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route index element={<Overview />} />
          <Route path="analytics" element={<Analytics />} />{" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
