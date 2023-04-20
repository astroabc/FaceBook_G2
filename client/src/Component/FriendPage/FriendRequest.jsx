import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFriendToList, rejectFriend } from "../../Redux/Slice/UserSlice";

const FriendRequest = () => {
  const dispatch = useDispatch();
  const allFriendReq = useSelector((state) => state.allUser.listReq);
  const loginAccId = useSelector((state) => state.loginAcc.userID);

  const [list, setList] = useState(false);
  console.log(list);
  const handleAddToListFriend = (id) => {
    dispatch(
      addFriendToList({
        id: id,
        myId: loginAccId,
      }),
    );
    setList(!list);
  };

  const handleRejectAddFriend = (id) => {
    dispatch(
      rejectFriend({
        id: id,
        myId: loginAccId,
      }),
    );
    setList(!list);
  };

  return (
    <div className="pt-4 px-6 w-full h-full flex flex-col gap-6 overflow-y-auto">
      <span className="text-xl font-semibold">Friend Request</span>
      <div className="w-full h-fit flex gap-6">
        {list !== null &&
          allFriendReq.map((el, index) => (
            <div
              key={index}
              className="w-[200px] h-[300px] rounded-xl cursor-pointer shadow-xl"
            >
              <img
                className="w-full h-[200px] object-cover rounded-t-xl"
                src={el.avatar}
                alt=""
              />
              <span className="flex items-center h-[40px] pl-4 font-semibold">
                {el.user}
              </span>
              <hr />
              <div className="w-full h-[60px] flex items-center justify-evenly">
                <button
                  onClick={() => handleAddToListFriend(el.id)}
                  className="px-3 py-1 rounded-full bg-slate-300"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleRejectAddFriend(el.id)}
                  className="px-3 py-1 rounded-full bg-slate-300"
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FriendRequest;
