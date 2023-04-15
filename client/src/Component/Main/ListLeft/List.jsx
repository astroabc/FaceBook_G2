import React from "react";

const List = ({ img, text }) => {
  return (
    <li className="cursor-pointer hover:bg-slate-200 py-2 px-3 rounded-full flex items-center gap-4">
      <div>{img}</div>
      <span>{text}</span>
    </li>
  );
};

export default List;
