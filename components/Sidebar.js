import React from "react";

const Sidebar = () => {
  return (
    <aside className="bg-gray-800 text-white w-64 h-screen p-4">
      <ul>
        <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer">Dashboard</li>
        <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer">Students</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
