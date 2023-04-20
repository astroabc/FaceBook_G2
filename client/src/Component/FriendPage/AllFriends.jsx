import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserData } from "../../Redux/Slice/UserSlice";

const AllFriends = () => {
  const loginAccId = useSelector((state) => state.loginAcc.userID);
  const allFriendAdded = useSelector((state) => state.allUser.listFr);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getUserData({
        id: loginAccId,
      }),
    );
  }, [dispatch, loginAccId]);
  return (
    <div className="pt-4 px-6 w-full h-full flex flex-col gap-6 overflow-y-auto">
      <span className="text-xl font-semibold">All Friend</span>
      <div className="w-full h-fit flex gap-6">
        {allFriendAdded &&
          allFriendAdded.map((el, id) => (
            <div
              key={id}
              className="w-[200px] h-[240px] rounded-xl cursor-pointer shadow-xl"
            >
              <img
                className="w-full h-[200px] object-cover rounded-t-xl"
                src={el.avatar}
                alt=""
              />
              <span className="flex items-center h-[40px] pl-4 font-semibold">
                {el.user}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllFriends;
