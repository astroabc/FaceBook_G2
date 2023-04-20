import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsBellFill, BsFacebook, BsMessenger } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { HiOutlineHome } from "react-icons/hi";
import { CgMenuGridO } from "react-icons/cg";
import { MdOutlineRemoveFromQueue } from "react-icons/md";
import { IoStorefrontOutline, IoGameControllerOutline } from "react-icons/io5";
import DropdownList from "../../Action/DropdownList";
import { useDispatch, useSelector } from "react-redux";
import { getAllMyPost } from "../../../Redux/Slice/PostSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const loginAcc = useSelector((state) => state.loginAcc.user);
  const allComment = useSelector((state) => state.postBlog.allMyComment);
  useEffect(() => {
    dispatch(
      getAllMyPost({
        user: loginAcc,
      }),
    );
  }, [dispatch, loginAcc]);
  const [showNotification, setShowNotification] = useState(false);
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
          to={"/friends/all"}
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
          <div className="fixed w-[280px] max-h-[400px] bg-slate-100 top-[60px] right-[80px] rounded-lg shadow-md flex flex-col overflow-y-auto">
            {allComment
              ? allComment.map((el, id) => (
                  <div
                    key={id}
                    className="w-full h-[80px] cursor-pointer bg-white border-solid border-[1px] border-gray-200 flex items-center justify-between"
                  >
                    <div className="basis-1/4 h-full flex justify-center items-center">
                      <img
                        className="w-12 h-12 rounded-full object-cover"
                        src={el.avatar}
                        alt=""
                      />
                    </div>
                    <div className="basis-3/4 h-full flex justify-center items-center text-sm text-black">
                      {el.user} just commented on your post
                    </div>
                  </div>
                ))
              : null}
          </div>
        )}
        <DropdownList />
      </div>
    </div>
  );
};

export default Navbar;
