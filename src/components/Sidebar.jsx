import React, { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSheet = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Trigger Button */}
      <button
        onClick={toggleSheet}
        className="px-4 py-3 hover:bg-gray-200 hover:cursor-pointer hover:scale-105 bg-gray-100 rounded-md transition"
      >
        <RiMenu3Line />
      </button>

      {/* Sidebar Sheet */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <div className="flex items-center">
            <img src="logo.png" width="100%" className="w-6" alt="logo" />
            <h5 className="font-bold text-lg">Quick <span className="text-green-600">Bite</span></h5>
          </div>
          <button
            onClick={toggleSheet}
            className="text-gray-500 hover:text-gray-800"
          >
            ✕
          </button>
        </div>
        <div className="px-8 py-10">
          <ul className="flex flex-col gap-10 me-4 font-semibold text-base">
            <li className="underline"><a href="#">Home</a></li>
            <li><a href="#">AboutUs</a></li>
            <li><a href="#">ContactUs</a></li>
            <li><a href="#">Cart</a></li>
          </ul>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSheet}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
