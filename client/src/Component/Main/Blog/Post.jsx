import React, { createRef, useState } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { AiFillLike } from "react-icons/ai";
import { RiSendPlane2Fill } from "react-icons/ri";
import { FaFacebookMessenger } from "react-icons/fa";
import { BiComment, BiLike } from "react-icons/bi";
import CommentPost from "./CommentPost";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  deletePost,
  getPost,
  patchComment,
  putPost,
} from "../../../Redux/Slice/PostSlice";

const Post = ({ content, img, id, time, user, comment, avatar }) => {
  const loginAcc = useSelector((state) => state.loginAcc);
  const dispatch = useDispatch();

  //Delete Post
  const handleDeletePost = () => {
    if (
      userRef.current.innerText === loginAcc.user ||
      userRef.current.innerText === ""
    ) {
      dispatch(deletePost(id));
      dispatch(getPost());
    } else {
      alert("Can not edit!");
    }
  };

  //Edit Post
  const userRef = createRef();
  const [editPost, setEditPost] = useState(false);
  const onClickEdit = () => {
    if (userRef.current.innerText === loginAcc.user) {
      setEditPost(true);
    }
  };
  const [contentEdit, setContentEdit] = useState(content);
  const handleSaveContent = () => {
    setEditPost(false);
    dispatch(
      putPost({
        id,
        content: contentEdit,
      }),
    );
  };

  //Comment Post
  const [clickComment, setClickComment] = useState(false);
  const [commentPost, setCommentPost] = useState("");
  const onPostComment = () => {
    dispatch(
      patchComment({
        id,
        commentNew: commentPost,
        user: loginAcc.user,
        avatar: loginAcc.avatar,
      }),
    );
    setCommentPost("");
    setClickComment(true);
  };
  const timePost = time.slice(11, 16);
  return (
    <div className="w-full px-4 py-2 bg-white rounded-lg">
      <div className="flex flex-row items-center justify-between gap-3">
        <div className="w-12 h-12 rounded-md relative z-10">
          <img
            className="bg-slate-300 w-11 h-11 rounded-lg bg-cover"
            src={avatar}
            alt=""
          />
          <div className="w-3 h-3 rounded-full absolute bg-green-500 bottom-0 right-0"></div>
        </div>
        <div className="flex flex-col items-start grow">
          <b ref={userRef}>{user}</b>
          <i className="text-base">{timePost}</i>
        </div>
        <div className="flex gap-2">
          <button onClick={onClickEdit}>
            <FiMoreHorizontal size={25} />
          </button>
          <button onClick={handleDeletePost}>
            <IoClose size={25} />
          </button>
        </div>
      </div>

      <div>
        {editPost ? (
          <div className="flex flex-col justify-center items-end pt-3 gap-2">
            <textarea
              onChange={(e) => setContentEdit(e.target.value)}
              className="w-full h-fit outline-none px-2 bg-slate-100"
            >
              {content}
            </textarea>
            <button
              onClick={handleSaveContent}
              className="bg-blue-400 text-white rounded-full px-5 py-1"
            >
              Save
            </button>
          </div>
        ) : (
          <p className="py-3 select-none">{content}</p>
        )}
        <div className="w-full bg-cover flex items-center justify-center">
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
          <button
            onClick={() => setClickComment(!clickComment)}
            htmlFor="comment"
            className="cursor-pointer flex items-center justify-center gap-2 hover:bg-slate-200 py-2 px-3 rounded-md w-[140px]"
          >
            <BiComment size={23} /> Comment
          </button>
          <button className="flex items-center justify-center gap-2 hover:bg-slate-200 py-2 px-3 rounded-md w-[140px]">
            <FaFacebookMessenger size={23} /> Share
          </button>
        </div>
      </div>
      <hr />

      <div className="w-full h-12 flex justify-start items-center my-2 gap-3">
        <div className="w-9 h-9 rounded-full bg-slate-400"></div>
        <input
          value={commentPost}
          onChange={(e) => setCommentPost(e.target.value)}
          className="comment-post w-[90%] h-[70%] px-3 px outline-none rounded-full border-[1px] border-solid border-gray-300"
          placeholder="Write something"
          type="text"
          name="comment"
        />
        <button onClick={onPostComment}>
          <RiSendPlane2Fill size={28} />
        </button>
      </div>

      <div>
        {clickComment &&
          comment.map((el, index) => (
            <CommentPost
              key={index}
              cmt={el.commentNew}
              user={el.user}
              avatar={el.avatar}
            />
          ))}
      </div>
    </div>
  );
};

export default Post;
