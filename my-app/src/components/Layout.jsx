import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ children, title }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Sidebar */}
      <div
        className={`
          fixed inset-y-0 left-0 z-40 w-60 bg-gray-900 text-white transform
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          transition-transform duration-300 ease-in-out
          md:relative md:translate-x-0 md:flex-shrink-0
        `}
      >
        <Sidebar />
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-y-auto md:ml-60">
        <Header title={title} onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 p-4 bg-gray-50">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
