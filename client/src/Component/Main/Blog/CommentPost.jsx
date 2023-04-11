import React from "react";

const CommentPost = ({ cmt, user }) => {
  return (
    <div className="py-2">
      <div className="flex flex-row gap-3">
        <div className="w-9 h-9 rounded-full bg-slate-300">
          <img src="" alt="" />
        </div>
        <div className="flex flex-col">
          <div className=" flex flex-col bg-slate-200 w-fit px-4 py-1 rounded-md">
            <b>{user}</b>
            <p className="pl-3">{cmt}</p>
          </div>
          <div className="flex items-center gap-4 pl-4">
            <button className="text-sm font-semibold">Like</button>
            <i className="text-sm">3 hours</i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentPost;
