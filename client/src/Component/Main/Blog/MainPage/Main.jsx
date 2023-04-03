import React from "react";
import MainLeft from "../../MainLeft";
import Blog from "./Blog";
import MainRight from "../../MainRight";
import PostContent from "../PostContent";
import { useSelector } from "react-redux";
// import Friend from './ChatFriend.jsx/Friend'
// import InboxChat from './ChatFriend.jsx/InboxChat'

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
