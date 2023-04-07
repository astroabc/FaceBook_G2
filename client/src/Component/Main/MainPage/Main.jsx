import React from "react";
import MainLeft from "./MainLeft";
import Blog from "./Blog";
import MainRight from "./MainRight";
import PostContent from "../Blog/PostContent";
import { useSelector } from "react-redux";

const Main = () => {
  const modal = useSelector((state) => state.statusModalPost);
  return (
    <div>
      {modal.status === true && <PostContent />}
      <div className="bg-[#f0f2f5] w-screen h-fit pt-20 px-8 flex flex-row">
        <MainLeft />
        <Blog />
        <MainRight />
      </div>
    </div>
  );
};

export default Main;
