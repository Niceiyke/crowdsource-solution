// src/components/Sidebar.js
import React from 'react';

const LeftSidebar = () => {
  return (
    <div className="w-full">
      <div className="bg-white p-4 shadow border-l border-green-300">
        <h2 className="text-xl font-semibold mb-4">Tags</h2>
        {/* Replace this with a list of tags */}
        <ul>
          <li className="text-blue-500">React</li>
          <li className="text-blue-500">JavaScript</li>
          {/* Add more tags */}
        </ul>
      </div>
    </div>
  );
};

export default LeftSidebar;
