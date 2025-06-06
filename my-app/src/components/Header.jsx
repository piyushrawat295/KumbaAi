import React from "react";
import { Search, User, Settings, ChevronLeft, Menu } from "lucide-react";

const Header = ({ title, onMenuClick }) => {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        {/* Show menu hamburger for small screens */}
        <button
          onClick={onMenuClick}
          className="md:hidden p-1 rounded-md hover:bg-gray-200 focus:outline-none"
        >
          <Menu className="w-6 h-6 text-gray-600" />
        </button>

        <h1 className="text-lg font-semibold text-gray-900">{title}</h1>
      </div>
      <div className="flex items-center space-x-3">
        <Search className="w-5 h-5 text-gray-600 cursor-pointer" />
        <Settings className="w-5 h-5 text-gray-600 cursor-pointer" />
        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
          <User className="w-4 h-4 text-white" />
        </div>
      </div>
    </div>
  );
};

export default Header;
