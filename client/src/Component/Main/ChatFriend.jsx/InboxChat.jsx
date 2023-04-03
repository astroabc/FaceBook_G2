import React, { useState } from "react";
import { AiOutlineFileGif, AiOutlineVideoCamera } from "react-icons/ai";
import { IoIosCall, IoMdAddCircleOutline, IoMdClose } from "react-icons/io";
import { BsImages } from "react-icons/bs";
import { VscChromeMinimize } from "react-icons/vsc";
import { IoSend } from "react-icons/io5";
import { RiStickyNoteLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { removeBox } from "../../../Redux/Slice/ChatStatusSlice";
import MessSend from "./MessSend";
import { messContent } from "../../../Redux/Slice/ChatMessageSlice";

const InboxChat = ({ name, id }) => {
  const dispatch = useDispatch();
  const [sendText, setSendText] = useState();
  const handleSendMess = () => {
    const content = {
      id: id,
      messSend: sendText,
    };
    dispatch(messContent(content));
  };

  const handleCloseChat = (id) => {
    dispatch(removeBox(id));
  };
  return (
    <div className="w-[330px] h-[425px] flex-none bg-white rounded-t-lg flex flex-col justify-between shadow-xl bottom-0 right-0">
      <div className="flex flex-row justify-between items-center h-12 w-full px-2 border-b-[1px] border-solid border-gray-200">
        <div className="flex flex-row gap-2 items-center">
          <div className="h-8 w-8 rounded-full bg-slate-500"></div>
          <div className="flex flex-col">
            <b>{name}</b>
            <small>Active</small>
          </div>
        </div>
        <div className="text-gray-400 flex gap-1">
          <button className="w-6 h-6 rounded-full hover:bg-slate-200">
            <IoIosCall size={22} />
          </button>
          <button className="w-6 h-6 rounded-full hover:bg-slate-200">
            <AiOutlineVideoCamera size={22} />
          </button>
          <button className="w-6 h-6 rounded-full hover:bg-slate-200">
            <VscChromeMinimize size={22} />
          </button>
          <button
            onClick={handleCloseChat}
            className="w-6 h-6 rounded-full hover:bg-slate-200"
          >
            <IoMdClose size={25} />
          </button>
        </div>
      </div>
      <div className="flex flex-col flex-grow w-full max-w-xl bg-[#f1f1f1] rounded-lg overflow-hidden">
        <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
          {/* <MessReceive /> */}
          <MessSend />
        </div>
      </div>
      <div className="h-12 w-full text-gray-400 flex items-center justify-between px-2">
        <button className="w-6 h-6 rounded-full hover:bg-slate-200">
          <IoMdAddCircleOutline size={25} />
        </button>
        <button className="w-6 h-6 rounded-full hover:bg-slate-200">
          <BsImages size={23} />
        </button>
        <button className="w-6 h-6 rounded-full hover:bg-slate-200">
          <RiStickyNoteLine size={23} />
        </button>
        <button className="w-6 h-6 rounded-full hover:bg-slate-200">
          <AiOutlineFileGif size={23} />
        </button>
        <input
          onChange={(e) => setSendText(e.target.value)}
          className="w-40 py-1 px-3 outline-none rounded-full bg-slate-200 text-black"
          placeholder="Aa"
          type="text"
          name=""
          id=""
        />
        <button onClick={handleSendMess} className="hover:text-blue-600">
          <IoSend size={25} />
        </button>
      </div>
    </div>
  );
};

export default InboxChat;
