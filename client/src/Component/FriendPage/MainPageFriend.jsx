import React from "react";
import { AiTwotoneSetting } from "react-icons/ai";
import { FaUserCheck, FaUserEdit, FaUserPlus } from "react-icons/fa";
import FriendRequest from "./FriendRequest";
import AllFriends from "./AllFriends";
import { Link, useParams } from "react-router-dom";
import SearchFriend from "./SearchFriend";

const MainPageFriend = () => {
  const params = useParams();
  // }
  return (
    <div className="pt-16 flex h-screen w-full">
      <div className="basis-1/5 shadow-2xl px-3">
        <div className="w-full flex flex-row justify-between items-center">
          <span className="text-2xl font-semibold">Friends</span>
          <div className="bg-slate-300 h-11 w-11 rounded-full grid place-content-center">
            <AiTwotoneSetting size={28} />
          </div>
        </div>
        <ul className="flex flex-col pt-4">
          <Link
            to={"/friends/all"}
            className="flex flex-row px-3 py-2 items-center gap-3 cursor-pointer rounded-full"
          >
            <FaUserCheck size={25} />
            <span>All Friends</span>
          </Link>
          <Link
            to={"/friends/request"}
            className="flex flex-row px-3 py-2 items-center gap-3 cursor-pointer rounded-full"
          >
            <FaUserPlus size={25} />
            <span>Friend Request</span>
          </Link>
          <Link
            to={"/friends/search"}
            className="flex flex-row px-3 py-2 items-center gap-3 cursor-pointer rounded-full"
          >
            <FaUserEdit size={25} />
            <span>Search Friend</span>
          </Link>
        </ul>
      </div>
      <div className="basis-4/5">
        {params.page === "all" && <AllFriends />}
        {params.page === "request" && <FriendRequest />}
        {params.page === "search" && <SearchFriend />}
      </div>
    </div>
  );
};

export default MainPageFriend;
