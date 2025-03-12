import React from 'react'
import Sidebar from './compnent/Sidebar'
import './index.css'; 
import Home from './compnent/Home';
import { useState } from 'react';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "w-60" : "w-16"
        } bg-teal-700 text-white transition-all duration-300 flex-shrink-0`}
      >
        <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      </div>

      {/* Home (Fully Expands) */}
      <div className="flex-grow p-6 bg-gray-100 transition-all duration-300">
        <Home />
      </div>
    </div>
  )
}

export default App
