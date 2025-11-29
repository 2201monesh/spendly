import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTheme } from "../context/ThemeContext";
import { supabase } from "@/lib/supabaseClient";
import Sidebar from "@/components/blocks/Sidebar";
import MainLayout from "@/layout/MainLayout";

function Dashboard() {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white w-full">
      {/* <h1 className="text-3xl font-bold">Dashboard</h1>

      <Button
        variant="outline"
        className="mt-4 cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </Button> */}
      <div className="flex w-full">
        <Sidebar />
        <MainLayout />
      </div>
    </div>
  );
}

export default Dashboard;
