import { Button } from "@/components/ui/button";
import ToggleSwitch from "@/components/ui/ToggleSwitch";
import { supabase } from "@/lib/supabaseClient";
import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

function MainLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const pageTitles = {
    "/dashboard": "Dashboard",
    "/dashboard/analytics": "Analytics",
    "/dashboard/add-expense": "Add Expense",
    "/dashboard/settings": "Settings",
  };

  const title = pageTitles[location.pathname] || "Page";

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  return (
    <div className="w-full h-screen border">
      <div className="w-full border-b p-3 h-14 flex items-center font-geist justify-between">
        <span>{title}</span>
        <div className="flex items-center gap-4">
          <ToggleSwitch />
          <Button
            variant="outline"
            className="cursor-pointer"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      </div>
      <div className="flex-1 overflow-auto p-4">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
