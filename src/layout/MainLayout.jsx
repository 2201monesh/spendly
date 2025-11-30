import React from "react";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="w-full h-screen border">
      <div className="w-full border-b p-3 h-14">Hello</div>
      <div className="flex-1 overflow-auto p-4">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
