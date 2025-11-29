import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTheme } from "../context/ThemeContext";
import { supabase } from "@/lib/supabaseClient";

function Dashboard() {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut(); // logout user
    navigate("/"); // redirect to homepage
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <Button variant="outline" className="mt-4" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
}

export default Dashboard;
