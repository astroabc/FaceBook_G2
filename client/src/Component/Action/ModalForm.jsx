import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postUpdate } from "../../Redux/Slice/UserSlice";
import { modalPost } from "../../Redux/Slice/PostModalSlice";

const ModalForm = () => {
  const loginAcc = useSelector((state) => state.loginAcc);

  const dispatch = useDispatch();
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

  const [updateAcc, setUpdateAcc] = useState({
    user: "",
    pass: "",
    email: "",
  });
  const { user, pass, email } = updateAcc;
  const onChangeForm = (e) => {
    setUpdateAcc({ ...updateAcc, [e.target.name]: e.target.value });
  };
  const onClickSaveUpdate = () => {
    dispatch(
      postUpdate({
        id: loginAcc.userID,
        user: user,
        pass: pass,
        email: email,
        avatar: baseImage,
      }),
    );
    dispatch(modalPost({ statusSetting: false }));
  };
  const onCloseSetting = () => {
    dispatch(modalPost({ statusSetting: false }));
  };

  return (
    <>
      <div className="fixed z-20 w-full h-full bg-slate-300 bg-opacity-70 grid place-content-center">
        <div className="w-[480px] h-[600px] bg-white rounded-lg shadow-lg flex flex-col items-center">
          <div className="basis-1/3 flex justify-center items-center">
            <img
              className="w-[160px] h-[160px] rounded-full object-cover border-solid border-2 border-gray-300"
              src={baseImage}
              name="avatar"
              onChange={onChangeForm}
              alt=""
            />
          </div>
          <div className="basis-2/3 w-[80%] flex flex-col py-4 gap-6">
            <div className=" flex items-center gap-3">
              <label className="w-24" htmlFor="user-update">
                Username
              </label>
              <input
                className="outline-none h-9 border-solid border-gray-300 border-[1px] rounded-md px-3"
                type="text"
                onChange={onChangeForm}
                name="user"
              />
            </div>
            <div className=" flex items-center gap-3">
              <label className="w-24" htmlFor="password-update">
                Password
              </label>
              <input
                className="outline-none h-9 border-solid border-gray-300 border-[1px] rounded-md px-3"
                type="password"
                onChange={onChangeForm}
                name="pass"
              />
            </div>
            <div className=" flex items-center gap-3">
              <label className="w-24" htmlFor="email-update">
                Email
              </label>
              <input
                className="outline-none h-9 border-solid border-gray-300 border-[1px] rounded-md px-3"
                type="email"
                onChange={onChangeForm}
                name="email"
              />
            </div>
            <div className="flex items-center gap-3">
              <p className="w-24" htmlFor="">
                Avatar
              </p>
              <input onChange={(e) => uploadImage(e)} type="file" name="" />
            </div>

            <div className="pt-10 flex items-center justify-evenly">
              <button
                onClick={onClickSaveUpdate}
                className="w-24 h-9 rounded-full bg-[#129af6] text-white font-semibold"
              >
                Save
              </button>
              <button
                onClick={onCloseSetting}
                className="w-24 h-9 rounded-full bg-[#129af6] text-white font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalForm;
