import React from "react";

const MessReceive = () => {
  return (
    <div className="flex w-full mt-2 space-x-3 max-w-xs">
      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300" />
      <div>
        <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
          <p className="text-sm">
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. */}
          </p>
        </div>
        <span className="text-xs text-gray-500 leading-none">2 min ago</span>
      </div>
    </div>
  );
};

export default MessReceive;
