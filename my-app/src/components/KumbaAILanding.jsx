import React, { useState } from 'react';
import { Play, Search, User, Settings, Image, Video, FileText, Headphones, ChevronLeft, Home } from 'lucide-react';
import UIButton from './Button';
import GTButton from './GetStartedBtn';
export default function KumbaLandingPage() {
  const [activeTab, setActiveTab] = useState('All');
  
  const galleryItems = [
    { id: 1, type: 'gradient', style: { background: 'linear-gradient(135deg, #a7f3d0 0%, #34d399 100%)' } },
    { id: 2, type: 'product', style: { background: '#f3f4f6' } },
    { id: 3, type: 'sky', style: { background: 'linear-gradient(135deg, #bfdbfe 0%, #3b82f6 100%)' } },
    { id: 4, type: 'clouds', style: { background: 'linear-gradient(135deg, #f3f4f6 0%, #d1d5db 100%)' } },
    { id: 5, type: 'plant', style: { background: 'linear-gradient(135deg, #065f46 0%, #10b981 100%)' } },
    { id: 6, type: 'interior', style: { background: 'linear-gradient(135deg, #fef3c7 0%, #f59e0b 100%)' } },
  ];

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <div className="w-60 bg-gray-900 text-white flex flex-col">
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
        <nav className="flex-1 px-4 py-4">
          <div className="mb-6">
            <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">Generator</h3>
            <div className="bg-gray-700 rounded-lg p-2 flex items-center space-x-2">
              <Home className="w-4 h-4" />
              <span className="text-sm">Dashboard</span>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">My Assets</h3>
          </div>

          <div>
            <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">AI Agents</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 p-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded cursor-pointer">
                <Image className="w-4 h-4" />
                <span className="text-sm">Generate Image</span>
              </div>
              <div className="flex items-center space-x-3 p-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded cursor-pointer">
                <Video className="w-4 h-4" />
                <span className="text-sm">Generate Video</span>
              </div>
              <div className="flex items-center space-x-3 p-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded cursor-pointer">
                <FileText className="w-4 h-4" />
                <span className="text-sm">Generate Content</span>
              </div>
              <div className="flex items-center space-x-3 p-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded cursor-pointer">
                <Headphones className="w-4 h-4" />
                <span className="text-sm">Generate Audio</span>
              </div>
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

      {/* Main Content */}
      <div className="flex-1 bg-gray-50 overflow-y-auto">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <ChevronLeft className="w-5 h-5 text-gray-600 cursor-pointer" />
            <h1 className="text-lg font-semibold text-gray-900">Product Video Generator</h1>
          </div>
          <div className="flex items-center space-x-3">
            <Search className="w-5 h-5 text-gray-600 cursor-pointer" />
            <Settings className="w-5 h-5 text-gray-600 cursor-pointer" />
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="m-5 translate-x-[-3px] translate-y-[-3px]  border-[1px] border-black shadow-[10px_10px_0_#000000] transition-all duration-300">

          <div className="bg-white  shadow-sm overflow-hidden">
            <div className="flex min-h-80">
              {/* Left Content */}
              <div className="flex-1 p-8 flex flex-col justify-center">
                <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
                  Create product<br />
                  videos that sell<br />
                  instantly!
                </h2>
                <p className="text-gray-600 text-base mb-8 leading-relaxed">
                  Turn browsers into buyers with videos that showcase your<br />
                  products in their best light
                </p>
                {/* <button className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2 w-fit">
                  
                  <div className="w-4 h-4 bg-pink-600 rounded flex items-center justify-center">
                    <Play className="w-2 h-2 fill-white text-white" />
                  </div>
                </button> */}
                <GTButton/>
              </div>
              
              {/* Right Image - Phone Mockup */}
              <div className="flex-1 bg-gray-900 flex items-center justify-center relative p-8">
                <div className="relative">
                  {/* Hands holding phone */}
                  <div className="relative z-10">
                    {/* Phone */}
                    <div className="w-48 h-80 bg-gray-800 rounded-3xl shadow-2xl p-2">
                      <div className="w-full h-full bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 rounded-2xl flex items-center justify-center">
                        <div className="w-20 h-28 bg-white bg-opacity-30 rounded-xl"></div>
                      </div>
                    </div>
                    
                    {/* Left hand */}
                    <div className="absolute -left-8 top-20 w-16 h-32 bg-yellow-300 rounded-full transform -rotate-12"></div>
                    
                    {/* Right hand */}
                    <div className="absolute -right-8 top-20 w-16 h-32 bg-yellow-300 rounded-full transform rotate-12"></div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-8 w-8 h-8 bg-pink-400 rounded-full opacity-80"></div>
                  <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-yellow-400 rounded-full opacity-60"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mx-6 mb-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Explore Gallery</h3>
                <p className="text-sm text-gray-600">Discover amazing product videos created by Kumba AI</p>
              </div>
              <div className="flex items-center space-x-3">
                <UIButton/>
                {/* <div className="relative">
                  <div className="w-11 h-6 bg-gray-200 rounded-full"></div>
                  <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm"></div>
                </div> */}
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex space-x-2 mb-6">
              {['All', 'Ecommerce', 'Retail'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === tab
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-3 gap-4">
              {galleryItems.map((item) => (
                <div
                  key={item.id}
                  className="aspect-video rounded-lg cursor-pointer hover:scale-105 transition-transform shadow-sm overflow-hidden"
                  style={item.style}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    {item.type === 'product' && (
                      <div className="w-16 h-12 bg-gray-400 rounded opacity-50"></div>
                    )}
                    {item.type === 'plant' && (
                      <div className="w-8 h-16 bg-green-300 rounded-full opacity-70"></div>
                    )}
                    {item.type === 'interior' && (
                      <div className="flex items-end space-x-1">
                        <div className="w-3 h-8 bg-gray-600 rounded"></div>
                        <div className="w-2 h-6 bg-yellow-600 rounded-full"></div>
                        <div className="w-3 h-4 bg-amber-400 rounded"></div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// import React, { useState } from 'react';
// import { Play, Search, User, Settings, Image, Video, FileText, Headphones, ChevronLeft, Home } from 'lucide-react';

// export default function KumbaLandingPage() {
//   const [activeTab, setActiveTab] = useState('All');
  
//   const galleryItems = [
//     { 
//       id: 1, 
//       type: 'gradient-green',
//       bg: 'linear-gradient(180deg, #a7f3d0 0%, #34d399 100%)'
//     },
//     { 
//       id: 2, 
//       type: 'white-product',
//       bg: '#f8fafc',
//       content: 'white-bottles'
//     },
//     { 
//       id: 3, 
//       type: 'sky-clouds',
//       bg: 'linear-gradient(180deg, #bfdbfe 0%, #dbeafe 100%)',
//       content: 'clouds'
//     },
//     { 
//       id: 4, 
//       type: 'gray-clouds',
//       bg: 'linear-gradient(180deg, #e5e7eb 0%, #f3f4f6 100%)',
//       content: 'gray-clouds'
//     },
//     { 
//       id: 5, 
//       type: 'plant-green',
//       bg: 'linear-gradient(135deg, #064e3b 0%, #047857 100%)',
//       content: 'plant'
//     },
//     { 
//       id: 6, 
//       type: 'bathroom',
//       bg: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)',
//       content: 'bathroom'
//     }
//   ];

//   return (
//     <div className="flex h-screen bg-gray-100 font-sans">
//       {/* Sidebar */}
//       <div className="w-64 bg-gray-900 text-white flex flex-col">
//         {/* Logo */}
//         <div className="px-4 py-3 flex items-center space-x-2 border-b border-gray-800">
//           <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center">
//             <div className="w-3 h-3 bg-white rounded-sm"></div>
//           </div>
//           <span className="font-bold text-lg tracking-wide">KUMBA</span>
//         </div>

//         {/* User Greeting */}
//         <div className="px-4 py-3 border-b border-gray-800">
//           <span className="text-sm text-gray-300">Hello Bharathi 👋</span>
//         </div>

//         {/* Navigation Sections */}
//         <div className="flex-1 px-4 py-4 space-y-6">
//           {/* Generator */}
//           <div>
//             <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">Generator</h3>
//             <div className="bg-gray-800 rounded-md px-3 py-2 flex items-center space-x-2">
//               <Home className="w-4 h-4" />
//               <span className="text-sm">Dashboard</span>
//             </div>
//           </div>

//           {/* My Assets */}
//           <div>
//             <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">My Assets</h3>
//           </div>

//           {/* AI Agents */}
//           <div>
//             <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">AI Agents</h3>
//             <div className="space-y-1">
//               <div className="flex items-center space-x-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md cursor-pointer transition-colors">
//                 <Image className="w-4 h-4" />
//                 <span className="text-sm">Generate Image</span>
//               </div>
//               <div className="flex items-center space-x-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md cursor-pointer transition-colors">
//                 <Video className="w-4 h-4" />
//                 <span className="text-sm">Generate Video</span>
//               </div>
//               <div className="flex items-center space-x-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md cursor-pointer transition-colors">
//                 <FileText className="w-4 h-4" />
//                 <span className="text-sm">Generate Content</span>
//               </div>
//               <div className="flex items-center space-x-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md cursor-pointer transition-colors">
//                 <Headphones className="w-4 h-4" />
//                 <span className="text-sm">Generate Audio</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom User Profile */}
//         <div className="px-4 py-4 border-t border-gray-800">
//           <div className="flex items-center space-x-3">
//             <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
//               <span className="text-white text-xs font-semibold">BM</span>
//             </div>
//             <div>
//               <div className="text-sm font-medium">Bharathi MM</div>
//               <div className="text-xs text-gray-400">Free Account</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col bg-gray-100">
//         {/* Header */}
//         <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
//           <div className="flex items-center space-x-4">
//             <ChevronLeft className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700" />
//             <h1 className="text-lg font-semibold text-gray-900">Product Video Generator</h1>
//           </div>
//           <div className="flex items-center space-x-4">
//             <Search className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700" />
//             <div className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center">
//               <span className="text-xs">⚙</span>
//             </div>
//             <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
//               <User className="w-4 h-4 text-white" />
//             </div>
//           </div>
//         </div>

//         <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
//           {/* Hero Section */}
//           <div className="bg-white rounded-lg shadow-sm overflow-hidden">
//             <div className="flex">
//               {/* Left Content */}
//               <div className="flex-1 px-12 py-16">
//                 <h2 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
//                   Create product<br />
//                   videos that sell<br />
//                   instantly!
//                 </h2>
//                 <p className="text-gray-600 text-lg mb-8 leading-relaxed">
//                   Turn browsers into buyers with videos that showcase your<br />
//                   products in their best light
//                 </p>
//                 <button className="bg-pink-400 hover:bg-pink-500 text-white px-8 py-4 rounded-lg font-medium transition-colors flex items-center space-x-3 text-lg">
//                   <span>Get Started</span>
//                   <div className="w-6 h-6 bg-pink-600 rounded-sm flex items-center justify-center">
//                     <Play className="w-3 h-3 fill-white text-white" />
//                   </div>
//                 </button>
//               </div>
              
//               {/* Right Image - Phone in Hands */}
//               <div className="flex-1 bg-gray-900 flex items-center justify-center p-12 relative">
//                 {/* Background decorative elements */}
//                 <div className="absolute top-8 right-16 w-12 h-12 bg-pink-400 rounded-full opacity-60"></div>
//                 <div className="absolute bottom-12 left-16 w-16 h-16 bg-yellow-400 rounded-full opacity-50"></div>
                
//                 {/* Phone mockup with hands */}
//                 <div className="relative">
//                   {/* Left hand */}
//                   <div className="absolute -left-16 top-12 w-20 h-40 bg-yellow-300 rounded-full transform -rotate-12 z-0"></div>
                  
//                   {/* Right hand */}
//                   <div className="absolute -right-16 top-12 w-20 h-40 bg-yellow-300 rounded-full transform rotate-12 z-0"></div>
                  
//                   {/* Phone */}
//                   <div className="relative z-10 w-48 h-96 bg-gray-800 rounded-3xl p-2 shadow-2xl">
//                     <div className="w-full h-full bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-2xl flex items-center justify-center">
//                       <div className="w-24 h-32 bg-white bg-opacity-40 rounded-xl shadow-inner"></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Gallery Section */}
//           <div className="bg-white rounded-lg shadow-sm p-8">
//             <div className="flex items-center justify-between mb-8">
//               <div>
//                 <h3 className="text-2xl font-semibold text-gray-900 mb-2">Explore Gallery</h3>
//                 <p className="text-gray-600">Discover amazing product videos created by Kumba AI</p>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <span className="text-sm text-gray-600 font-medium">My Library</span>
//                 <div className="relative inline-block w-12 h-6">
//                   <div className="w-12 h-6 bg-gray-900 rounded-full shadow-inner"></div>
//                   <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform"></div>
//                 </div>
//               </div>
//             </div>

//             {/* Filter Tabs */}
//             <div className="flex space-x-2 mb-8">
//               {['All', 'Ecommerce', 'Retail'].map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => setActiveTab(tab)}
//                   className={`px-6 py-3 rounded-lg font-medium transition-colors ${
//                     activeTab === tab
//                       ? 'bg-gray-900 text-white'
//                       : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                   }`}
//                 >
//                   {tab}
//                 </button>
//               ))}
//             </div>

//             {/* Gallery Grid */}
//             <div className="grid grid-cols-3 gap-6">
//               {galleryItems.map((item) => (
//                 <div
//                   key={item.id}
//                   className="aspect-video rounded-xl cursor-pointer hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg overflow-hidden"
//                   style={{ background: item.bg }}
//                 >
//                   <div className="w-full h-full flex items-center justify-center p-6">
//                     {item.content === 'white-bottles' && (
//                       <div className="flex space-x-2">
//                         <div className="w-4 h-12 bg-white rounded-full shadow-md opacity-80"></div>
//                         <div className="w-4 h-10 bg-white rounded-full shadow-md opacity-60"></div>
//                         <div className="w-4 h-8 bg-white rounded-full shadow-md opacity-40"></div>
//                       </div>
//                     )}
//                     {item.content === 'clouds' && (
//                       <div className="flex space-x-3">
//                         <div className="w-8 h-4 bg-white rounded-full opacity-70"></div>
//                         <div className="w-12 h-6 bg-white rounded-full opacity-50"></div>
//                         <div className="w-6 h-3 bg-white rounded-full opacity-60"></div>
//                       </div>
//                     )}
//                     {item.content === 'gray-clouds' && (
//                       <div className="flex space-x-2">
//                         <div className="w-10 h-5 bg-gray-300 rounded-full opacity-60"></div>
//                         <div className="w-8 h-4 bg-gray-400 rounded-full opacity-50"></div>
//                       </div>
//                     )}
//                     {item.content === 'plant' && (
//                       <div className="relative">
//                         <div className="w-16 h-20 bg-green-400 rounded-full opacity-70"></div>
//                         <div className="absolute top-2 left-6 w-8 h-12 bg-green-300 rounded-full opacity-60"></div>
//                       </div>
//                     )}
//                     {item.content === 'bathroom' && (
//                       <div className="flex items-end space-x-2">
//                         <div className="w-2 h-16 bg-gray-400 rounded-sm"></div>
//                         <div className="w-2 h-12 bg-gray-300 rounded-sm"></div>
//                         <div className="w-8 h-6 bg-amber-400 rounded-full"></div>
//                         <div className="w-6 h-4 bg-amber-600 rounded-full"></div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }