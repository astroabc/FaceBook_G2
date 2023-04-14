import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsBellFill, BsFacebook, BsMessenger } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { HiOutlineHome } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";
import { MdOutlineRemoveFromQueue } from "react-icons/md";
import { IoStorefrontOutline, IoGameControllerOutline } from "react-icons/io5";
import DropdownList from "../../Action/DropdownList";

const Navbar = () => {
  const [showNotification, setShowNotification] = useState();
  const onClickNotification = () => {
    setShowNotification(!showNotification);
  };
  return (
    <div className="fixed z-30 w-full shadow-md bg-[#ffffff] h-14 flex flex-row justify-between items-center px-8 text-gray-500">
      <div className="flex flex-row items-center w-[400px] min-w-fit gap-2 justify-items-start">
        <span className="text-[#129af6]">
          <BsFacebook size={38} />
        </span>
        <input
          className="py-2 outline-none pl-4 bg-slate-100 rounded-full lg:hidden"
          id="default-search"
          placeholder="Search..."
        />
      </div>
      <div className="main-switch-page flex flex-row h-full w-[680px]">
        <Link
          to={"/main"}
          className="h-full w-[80px] grow rounded-md hover:bg-slate-200 flex items-center justify-center"
        >
          <HiOutlineHome size={25} />
        </Link>
        <Link
          to={"/friends"}
          className="h-full w-[80px] grow rounded-md hover:bg-slate-200 flex items-center justify-center"
        >
          <FiUsers size={25} />
        </Link>
        <button>
          <MdOutlineRemoveFromQueue size={25} />
        </button>
        <button>
          <IoStorefrontOutline size={25} />
        </button>
        <button>
          <IoGameControllerOutline size={25} />
        </button>
      </div>

      <div className="main-icon flex  flex-row w-[400px] min-w-fit gap-4 justify-end items-center">
        <button>
          <CgMenuGridO size={30} />
        </button>
        <button>
          <BsMessenger size={20} />
        </button>
        <button onClick={onClickNotification} className="relative">
          <BsBellFill size={20} />
        </button>
        {showNotification && (
          <div className="fixed w-[280px] h-[420px] bg-slate-300 top-[60px] right-[80px] rounded-lg shadow-md flex flex-col overflow-y-auto">
            <div className="w-full h-[80px] cursor-pointer bg-white border-solid border-[1px] border-gray-200 flex items-center justify-between">
              <div className="basis-1/4 h-full flex justify-center items-center">
                <FaUserCircle size={40} />
              </div>
              <div className="basis-3/4 h-full flex justify-center items-center text-sm text-black">
                If you are browsing Commons for the first time
              </div>
            </div>
          </div>
        )}
        <DropdownList />
      </div>
    </div>
  );
};

export default Navbar;
