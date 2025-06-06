import React from "react";
import { Image, Video, FileText, Headphones, Home } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-full w-60 bg-gray-900 text-white">
      {/* Logo */}
      <div className="p-4 flex items-center space-x-2">
        <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center">
          <Home className="w-3 h-3 text-white" />
        </div>
        <span className="font-bold text-lg">KUMBA</span>
      </div>

      {/* User Greeting */}
      <div className="px-4 py-2">
        <span className="text-sm text-gray-300">Hello Bharathi 👋</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-4 overflow-auto">
        {/* Generator */}
        <div className="mb-6">
          <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
            Generator
          </h3>
          <div className="bg-gray-700 rounded-lg p-2 flex items-center space-x-2">
            <Home className="w-4 h-4" />
            <span className="text-sm">Dashboard</span>
          </div>
        </div>

        {/* My Assets */}
        <div className="mb-6">
          <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
            My Assets
          </h3>
        </div>

        {/* AI Agents */}
        <div>
          <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
            AI Agents
          </h3>
          <div className="space-y-2">
            {[
              { icon: Image, label: "Generate Image" },
              { icon: Video, label: "Generate Video" },
              { icon: FileText, label: "Generate Content" },
              { icon: Headphones, label: "Generate Audio" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center space-x-3 p-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded cursor-pointer"
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* Bottom User Profile */}
      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-semibold">BM</span>
          </div>
          <div>
            <div className="text-sm font-medium">Bharathi MM</div>
            <div className="text-xs text-gray-400">Free Account</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
