import React, { useEffect } from "react";
import { MdOutlineVideoCall } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";
import Friend from "../ChatFriend.jsx/Friend";
import { useDispatch, useSelector } from "react-redux";
import { chatStatus } from "../../../Redux/Slice/ChatStatusSlice";
import { getUser } from "../../../Redux/Slice/UserSlice";

const MainRight = () => {
  const dispatch = useDispatch();
  const onClickChatFriend = (name) => {
    dispatch(chatStatus(name));
  };
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const allUser = useSelector((state) => state.allUser.allUser);
  return (
    <div className="basis-1/5 flex flex-col items-end sm:hidden xl:basis-[30%]">
      <div className="fixed w-[360px] shrink xl:w-fit flex flex-col h-fit overflow-scroll">
        <div className="grid grid-rows-3 w-full h-[360px]">
          <div className="col-span-1 flex flex-row items-center gap-2">
            <div className="w-[120px] h-[120px] rounded-md">
              {/* <img
                src="https://hips.hearstapps.com/hmg-prod/images/isaac_newton_1689_painting_sir_godfrey_kneller_public_domain_via_wikimedia_commons.jpg?resize=1200:*"
                alt=""
              /> */}
            </div>
            {/* <div className="grow">
              Isaac Newton was an English physicist and mathematician famous for
              his laws of physics. He was a key figure in the Scientific
              Revolution of the 17th century.
            </div> */}
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex justify-between">
            <span>Friends</span>
            <div className="flex flex-row gap-4">
              <MdOutlineVideoCall size={26} />
              <AiOutlineSearch size={23} />
              <FiMoreHorizontal size={23} />
            </div>
          </div>
          <div className="h-[500px] flex flex-col w-full pt-3">
            {allUser &&
              allUser.map((el, id) => (
                <Friend
                  key={id}
                  name={el.user}
                  id={id}
                  onClickChatFriend={onClickChatFriend}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainRight;
