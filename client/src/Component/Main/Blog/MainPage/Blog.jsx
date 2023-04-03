import React from "react";
import { MdInsertEmoticon, MdVideoCall } from "react-icons/md";
import { ImFilePicture } from "react-icons/im";
import PostEdit from "../PostEdit";
import InboxChat from "../../ChatFriend.jsx/InboxChat";
import { useDispatch, useSelector } from "react-redux";
import { modalPost } from "../../../../Redux/Slice/PostModalSlice";
import Post from "../Post";

const Blog = () => {
  const dispatch = useDispatch();
  // const [showComment, setShowComment] = useState(false);
  // const handleClickComment = (id) => {
  //   setShowComment(!showComment);
  //   setIdComment(id);
  // };

  //Chat Box
  const statusInbox = useSelector((state) => state.chatStatus);
  function unique(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (newArr.indexOf(arr[i]) === -1) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
  const onClickInputBlog = () => {
    dispatch(
      modalPost({
        status: true,
      }),
    );
  };

  //Post
  const allPost = useSelector((state) => state.postMainBlog);

  return (
    <div className="basis-3/5 h-fit flex justify-center sm:basis-[100%] xl:basis-[70%]">
      <div
        id="inbox"
        className=" fixed bottom-0 right-[400px] z-20 h-[425px] flex flex-row-reverse gap-1 max-w-[500px]"
      >
        {unique(statusInbox).map((el, id) => (
          <InboxChat key={id} name={el} id={id} />
        ))}
      </div>
      <div className="w-[680px] sm:w-[680px] md:w-fit flex flex-col gap-3 rounded-md">
        <div className="grid grid-rows-2 rounded-md px-3 bg-white w-full h-[124px]">
          <div className="row-span-1 flex flex-row gap-2 items-center px-3">
            <div className="w-9 h-9 rounded-full bg-slate-300"></div>
            <input
              onClick={onClickInputBlog}
              className="post-content grow py-2 px-3 bg-slate-200 rounded-full outline-none"
              placeholder="Write something"
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="row-span-1 grid grid-cols-3 px-12">
            <PostEdit img={<MdVideoCall size={28} />} text={"Live Video"} />
            <PostEdit
              img={<ImFilePicture size={23} />}
              text={"Picture/Video"}
            />
            <PostEdit
              img={<MdInsertEmoticon size={28} />}
              text={"Mod/Activity"}
            />
          </div>
        </div>
        <div className="rounded-md flex flex-col justify-center gap-4">
          {allPost.map((el, id) => (
            <Post key={id} content={el.content} img={el.image} id={id} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Blog;
