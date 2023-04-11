import React from "react";
import { FaUserFriends } from "react-icons/fa";
import { IoStorefrontOutline } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { HiUserGroup } from "react-icons/hi";
import { TiDeviceDesktop } from "react-icons/ti";
import { MdExpandMore } from "react-icons/md";
import List from "../ListLeft/List";

const MainLeft = () => {
  return (
    <div className="basis-1/5 static h-fit lg:hidden">
      <div className="fixed w-[300px]">
        <div className="">
          <ul className="main-left-1 flex flex-col gap-1 py-4">
            <List img={<FaUserFriends size={25} />} text={"Friend"} />
            <List
              img={<IoStorefrontOutline size={25} />}
              text={"Marketplace"}
            />
            <List img={<ImNewspaper size={25} />} text={"News Feed"} />
            <List img={<HiUserGroup size={25} />} text={"Group"} />
            <List img={<TiDeviceDesktop size={25} />} text={"Watch"} />
            <List img={<MdExpandMore size={25} />} text={"More"} />
          </ul>
        </div>
        {/* <div>
          <ul className="main-left-2 py-4 flex flex-col gap-1">
            <List img={"Icon"} text={"Group 1"} />
            <List img={"Icon"} text={"Group 2"} />
            <List img={"Icon"} text={"Group 3"} />
            <List img={"Icon"} text={"Group 4"} />
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default MainLeft;
