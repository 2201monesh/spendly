import React from "react";
import { Outlet, useLocation } from "react-router-dom";

function MainLayout() {
  const location = useLocation();

  const pageTitles = {
    "/dashboard": "Dashboard",
    "/dashboard/analytics": "Analytics",
    "/dashboard/add-expense": "Add Expense",
    "/dashboard/settings": "Settings",
  };

  const title = pageTitles[location.pathname] || "Page";

  return (
    <div className="w-full h-screen border">
      <div className="w-full border-b p-3 h-14 flex items-center font-geist">
        {title}
      </div>
      <div className="flex-1 overflow-auto p-4">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
