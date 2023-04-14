import React from "react";

const FriendRequest = () => {
  return (
    <div className="pt-4 px-6 w-full h-full flex flex-col gap-6 overflow-y-auto">
      <span className="text-xl font-semibold">All Friend</span>
      <div className="w-full h-fit flex">
        <div className="w-[200px] h-[300px] rounded-xl cursor-pointer shadow-xl">
          <img
            className="w-full h-[200px] object-cover rounded-t-xl"
            src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
          <span className="flex items-center h-[40px] pl-4 font-semibold">
            Thanh Tung
          </span>
          <hr />
          <div className="w-full h-[60px] flex items-center justify-evenly">
            <button className="px-3 py-1 rounded-full bg-slate-300">
              Accept
            </button>
            <button className="px-3 py-1 rounded-full bg-slate-300">
              Reject
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendRequest;
