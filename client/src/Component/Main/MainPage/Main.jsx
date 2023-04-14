import React from "react";
import MainLeft from "./MainLeft";
import Blog from "./Blog";
import MainRight from "./MainRight";
import PostContent from "../Blog/PostContent";
import { useSelector } from "react-redux";
import ModalForm from "../../Action/ModalForm";

const Main = () => {
  const modal = useSelector((state) => state.statusModalPost);
  return (
    <div className="relative">
      {modal.status === true && <PostContent />}
      {modal.statusSetting === true ? <ModalForm /> : null}
      <div className="bg-[#f0f2f5] h-fit pt-20 px-8 flex flex-row">
        <MainLeft />
        <Blog />
        <MainRight />
      </div>
    </div>
  );
};

export default Main;
