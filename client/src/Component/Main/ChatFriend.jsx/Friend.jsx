import React from "react";

const Friend = ({ img, name, onClickChatFriend }) => {
  return (
    <div
      onClick={() => onClickChatFriend(name)}
      className="flex cursor-pointer border-b-2 py-1 px-3 rounded-full border-solid border-gray-200 gap-3 items-center w-full hover:bg-slate-200"
    >
      <div>
        <img
          className="w-10 h-10 rounded-full grid place-content-center"
          src={img}
          alt=""
        />
      </div>
      <p className="text-black">{name}</p>
    </div>
  );
};

export default Friend;
