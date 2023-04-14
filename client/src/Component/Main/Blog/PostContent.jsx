import React, { useState } from "react";
import { MdEmojiEmotions, MdOutlineClose } from "react-icons/md";
import { BsFillImageFill } from "react-icons/bs";
import { IoMdVideocam } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { modalPost } from "../../../Redux/Slice/PostModalSlice";
import { postPost } from "../../../Redux/Slice/PostSlice";

const PostContent = () => {
  const dispatch = useDispatch();
  const loginAcc = useSelector((state) => state.loginAcc);
  //Post Main
  const [baseImage, setBaseImage] = useState("");
  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
  };
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const [contentPost, setContentPost] = useState(" ");
  const onChangeContentPost = (e) => {
    setContentPost(e.target.value);
  };
  const onClickPost = () => {
    const content = {
      content: contentPost,
      image: baseImage,
      comment: [],
      user: loginAcc.user,
      avatarUser: loginAcc.avatar,
    };
    dispatch(postPost(content));
    dispatch(
      modalPost({
        status: false,
      }),
    );
  };

  //Modal Post
  const onCloseModal = () => {
    dispatch(
      modalPost({
        status: false,
      }),
    );
  };
  return (
    <div className="fixed z-30 w-full h-full flex justify-center items-center bg-slate-200 bg-opacity-75">
      <div className="w-[498px] rounded-lg bg-white bg-opacity-100 flex flex-col justify-start">
        <div className="flex w-full h-[60px] items-center px-4">
          <b className="grow text-center text-xl">Create post</b>
          <button
            onClick={onCloseModal}
            className="w-8 h-8 rounded-full bg-slate-300 flex justify-center items-center"
          >
            <MdOutlineClose size={25} />
          </button>
        </div>
        <hr />
        <div className="flex justify-start gap-3 items-center pl-4 pt-3">
          <img
            className="h-10 w-10 rounded-full"
            src={loginAcc.avatar}
            alt=""
          />
          <b>{loginAcc.user}</b>
        </div>
        <div className="flex flex-col gap-2 py-3 items-center justify-center">
          <textarea
            onChange={onChangeContentPost}
            className="w-full outline-none px-6 text-xl"
            placeholder="Write something..."
            name=""
            id=""
            cols="30"
            rows="3"
            required={true}
          />
          <img className="w-[680px] bg-cover" src={baseImage} alt="" />
          <div className="h-14 w-[90%] rounded-lg border-[2px] border-solid border-gray-200 flex flex-row justify-evenly items-center">
            <button>
              <IoMdVideocam size={28} />
            </button>
            <label className="cursor-pointer" htmlFor="file-content">
              <input
                className="hidden"
                onChange={(e) => uploadImage(e)}
                type="file"
                name="file-content"
                id="file-content"
                accept="image/png, image/gif, image/jpeg"
              />
              <BsFillImageFill size={25} />
            </label>
            <button>
              <MdEmojiEmotions size={28} />
            </button>
          </div>
          <button
            onClick={onClickPost}
            className="bg-[#1b74e4] w-[80%] rounded-full text-white text-lg py-2"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostContent;
