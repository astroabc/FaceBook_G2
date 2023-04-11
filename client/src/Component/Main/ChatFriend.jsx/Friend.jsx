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
          src="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=826&t=st=1681039637~exp=1681040237~hmac=10f406e358e17eb0f59191e58e5aaee208996eda06e06bd2bb3c63503561b00a"
          alt=""
        />
      </div>
      <p className="text-black">{name}</p>
    </div>
  );
};

export default Friend;
