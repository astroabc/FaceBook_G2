import React, { useEffect, useState } from "react";
import { BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postLogin } from "../../Redux/Slice/LoginSlice";
import { Bars } from "react-loader-spinner";

function Login() {
  const handleShowPass = () => {
    const hide = document.getElementById("pass");
    hide.type === "password" ? (hide.type = "text") : (hide.type = "password");
  };
  const [userLogin, setUserLogin] = useState();
  const [passLogin, setPassLogin] = useState();
  const dispatch = useDispatch();
  const account = {
    user: userLogin,
    pass: passLogin,
  };
  const loginAcc = useSelector((state) => state.loginAcc);
  const navigate = useNavigate();
  const onClickLogin = (event) => {
    event.preventDefault();
    dispatch(postLogin(account));
  };

  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line
  useEffect(() => {
    if (loginAcc.isSuccess) {
      setLoading(true);
      setTimeout(() => {
        loginAcc.isSuccess && navigate("/main");
        setLoading(false);
      }, 2000);
    }
  });
  return (
    <>
      {loading ? (
        <div className="w-screen h-screen flex items-center justify-center">
          <Bars color="#94a3b8" height={100} width={100} />
        </div>
      ) : (
        <div className="relative w-screen h-screen bg-slate-200">
          <div className="absolute w-[320px] translate-x-[150%] translate-y-[150%]">
            <span className="font-bold text-[#1877f2] text-5xl">PostAny</span>
            <p className="text-xl">
              PostAny giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống
              của bạn.
            </p>
          </div>

          <form className=" absolute translate-x-[250%] translate-y-[30%] w-[350px] h-[396px] text-center px-4 bg-white shadow-2xl rounded-md flex flex-col justify-evenly items-center">
            <div className="w-full flex flex-col items-center gap-2">
              <input
                autoComplete="off"
                onChange={(e) => setUserLogin(e.target.value)}
                className="h-[50px] w-full rounded-md px-3"
                placeholder="Type your username"
                type="text"
                name=""
                id=""
              />
              <div className="h-[50px] w-full flex items-center rounded-md border-solid border-2 border-gray-300">
                <input
                  autoComplete="off"
                  onChange={(e) => setPassLogin(e.target.value)}
                  className="w-full h-full  px-3"
                  placeholder="Type your password"
                  type="password"
                  name="pass"
                  id="pass"
                />
                <span
                  onClick={handleShowPass}
                  className="w-[50px] h-full grid place-content-center cursor-pointer bg-white"
                >
                  <BiHide />
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-3 w-full">
              <button
                onClick={onClickLogin}
                className="bg-[#1877f2] py-3 text-white rounded-md"
              >
                Login
              </button>
              <span className="text-blue-500">Forgot password?</span>
            </div>
            <hr />
            <button className="bg-[#42b72a] p-2 rounded-md text-white">
              <Link to={"/register"}>Create new account</Link>
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default Login;
