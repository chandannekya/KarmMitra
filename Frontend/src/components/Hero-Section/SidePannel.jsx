import React, { useState } from "react";

const SidePanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 left-0 h-screen w-full z-50 overflow-auto">
      <div
        className={`fixed top-0 left-0 h-screen w-full bg-gray-900 opacity-50 transition duration-300 ease-in-out ${
          isOpen ? "opacity-75" : ""
        }`}
        onClick={togglePanel}
      />

      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-md transition duration-300 ease-in-out transform translate-x-0 ${
          isOpen ? "-translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Side panel content goes here */}
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Side Panel</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-500">
                Item 1
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-500">
                Item 2
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-500">
                Item 3
              </a>
            </li>
          </ul>
        </div>
      </div>

      <button
        className={`fixed top-16 left-4 focus:outline-none ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={togglePanel}
      >
        <svg
          className="h-6 w-6 text-gray-700 hover:text-blue-500"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 18L18 6M6 6l12 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default SidePanel;
