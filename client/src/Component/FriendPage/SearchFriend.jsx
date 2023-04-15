import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { putAddFriend, searchAccount } from "../../Redux/Slice/UserSlice";

const SearchFriend = () => {
  const [search, setSearch] = useState(undefined);
  const loginAccId = useSelector((state) => state.loginAcc.userID);
  const searchUser = useSelector((state) => state.allUser.search);
  const dispatch = useDispatch();

  const onChangeSearchFriend = (e) => {
    setSearch(e.target.value);
  };

  const handleAddFriend = (idFriendAdd) => {
    dispatch(putAddFriend({ id: idFriendAdd, myId: loginAccId }));
  };
  const handleSearchFriend = () => {
    dispatch(searchAccount({ user: search }));
  };

  return (
    <div className="pt-4 px-6 w-full h-full flex flex-col overflow-y-auto">
      <span className="text-xl font-semibold">Search Friend</span>
      <div className="mb-3 w-full flex justify-center">
        <div className="relative mb-4 flex flex-wrap items-stretch  w-[70%] h-12">
          <input
            onChange={onChangeSearchFriend}
            type="search"
            className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l-full border border-solid border-neutral-500 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon3"
          />
          {/*Search button*/}
          <button
            onClick={handleSearchFriend}
            className="relative z-[2] rounded-r-full border-2 border-neutral-500 px-6 py-2 text-base font-semibold uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
            type="button"
            id="button-addon3"
            data-te-ripple-init=""
          >
            Search
          </button>
        </div>
      </div>

      <div className="w-full px-6 flex flex-wrap gap-4">
        {searchUser.length > 0 &&
          searchUser.map((el, index) => (
            <div
              key={index}
              className="w-[200px] h-[280px] rounded-xl cursor-pointer shadow-xl"
            >
              <img
                className="w-full h-[200px] object-cover rounded-t-xl"
                src={el.avatar}
                alt=""
              />
              <span className="flex items-center h-[40px] pl-4 font-semibold">
                {el.user}
              </span>
              <button
                onClick={() => handleAddFriend(el.id)}
                className="w-full h-[40px] flex items-center justify-center bg-slate-300 rounded-b-xl hover:bg-slate-400"
              >
                Add Friend
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchFriend;
