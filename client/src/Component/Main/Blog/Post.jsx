import React, { createRef, useMemo, useState } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { AiFillLike } from "react-icons/ai";
import { FaFacebookMessenger } from "react-icons/fa";
import { BiComment, BiLike } from "react-icons/bi";
import { removePost } from "../../../Redux/Slice/PostSlice";
import CommentPost from "./CommentPost";
import { useDispatch } from "react-redux";

const Post = ({ content, img, id }) => {
  const dispatch = useDispatch();
  const handleDeletePost = () => {
    dispatch(removePost(id));
  };
  const [showComment, setShowComment] = useState(false);
  const handleClickComment = () => {
    setShowComment(!showComment);
  };

  const [comment, setComment] = useState("");
  let cmt = useMemo(() => [], []);
  const inputComment = createRef();
  const onSetComment = (e) => {
    setComment(e.target.value);
    if (e.key === "Enter") {
      cmt.push(comment);
      inputComment.current.value = "";
      setComment(inputComment.current.value);
    }
  };

  return (
    <div className="w-full px-4 py-2 bg-white rounded-lg">
      <div className="flex flex-row items-center justify-between gap-3">
        <div className="w-12 h-12 rounded-md relative z-10">
          <div className="w-11 h-11 rounded-md bg-slate-400 absolute top-0 left-0"></div>
          <div className="w-6 h-6 rounded-full absolute bg-slate-600 bottom-0 right-0"></div>
        </div>
        <div className="flex flex-col items-start grow">
          <b>Thanh Tung</b>
          <i className="text-sm">11 hours</i>
        </div>
        <div className="flex gap-2">
          <button>
            <FiMoreHorizontal size={25} />
          </button>
          <button onClick={handleDeletePost}>
            <IoClose size={25} />
          </button>
        </div>
      </div>

      <div>
        <p className="py-3">{content}</p>
        <div className="w-full bg-cover">
          <img src={img} alt="" />
        </div>
      </div>

      <div>
        <div className="flex flex-row justify-between items-center px-4 py-2">
          <div className="flex items-center gap-2">
            <button className="text-gray-400">
              <AiFillLike size={25} />
            </button>
            <p>123</p>
          </div>
          <div>
            <span>123</span> Comments
          </div>
        </div>
        <hr />
        <div className="flex flex-row text-center justify-around py-1">
          <button className="like-button flex items-center justify-center gap-2 py-2 px-3 rounded-md w-[140px]">
            <BiLike size={23} /> Like
          </button>
          <label
            htmlFor="comment"
            onClick={() => handleClickComment(id)}
            className="cursor-pointer flex items-center justify-center gap-2 hover:bg-slate-200 py-2 px-3 rounded-md w-[140px]"
          >
            <BiComment size={23} /> Comment
          </label>
          <button className="flex items-center justify-center gap-2 hover:bg-slate-200 py-2 px-3 rounded-md w-[140px]">
            <FaFacebookMessenger size={23} /> Share
          </button>
        </div>
      </div>
      <hr />

      {showComment && (
        <div className="w-full h-12 flex justify-start items-center my-2 gap-3">
          <div className="w-9 h-9 rounded-full bg-slate-400"></div>
          <input
            ref={inputComment}
            onKeyDown={onSetComment}
            className="comment-post w-[90%] h-[90%] px-3 px outline-none rounded-full border-[1px] border-solid border-gray-300"
            placeholder="Write something"
            type="text"
            name="comment"
            id="comment"
          />
        </div>
      )}

      <div>
        {cmt && cmt.map((el, id) => <CommentPost key={id} comment={el} />)}
      </div>
    </div>
  );
};

export default Post;
