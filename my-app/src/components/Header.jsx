import React from 'react';
import { ChevronLeft, Search, Settings, User, Menu } from 'lucide-react';

// const Header = ({ onMenuClick }) => {
//   return (
//     <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
//       <div className="flex items-center space-x-4">
//         {/* Hamburger only on mobile */}
//         <button onClick={onMenuClick} className="md:hidden text-gray-600">
//           <Menu className="w-5 h-5" />
//         </button>

//         <h1 className="text-lg font-semibold text-gray-900">
//           Product Video Generator
//         </h1>
//       </div>
//       <div className="flex items-center space-x-4">
//         <Search className="w-5 h-5 text-gray-600 cursor-pointer" />
//         <Settings className="w-5 h-5 text-gray-600 cursor-pointer" />
//         <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
//           <User className="w-4 h-4 text-white" />
//         </div>
//       </div>
//     </header>
//   );
// };
// ... (rest of Header.jsx)
const Header = ({ onMenuClick, title }) => { // Accept title prop
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <button
          onClick={onMenuClick}
          className="md:hidden text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <h1 className="text-lg font-semibold text-gray-900">
          {title} {/* Use the title prop here */}
        </h1>
      </div>
      <div className="flex items-center space-x-4">
        <Search className="w-5 h-5 text-gray-600 cursor-pointer" />
        <Settings className="w-5 h-5 text-gray-600 cursor-pointer" />
        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
          <User className="w-4 h-4 text-white" />
        </div>
      </div>
    </header>
  );
};

export default Header;

// export default Header;
