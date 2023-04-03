import React from "react";

const PostEdit = ({ img, text }) => {
  return (
    <div className="flex items-center gap-2">
      <div>{img}</div>
      <span>{text}</span>
    </div>
  );
};

export default PostEdit;
