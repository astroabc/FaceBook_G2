import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { postRegister } from "../../Redux/Slice/RegisterSlice";

const Register = () => {
  const [signAccount, setSignAccount] = useState({
    user: "",
    pass: "",
    email: "",
  });
  const { user, pass, email } = signAccount;
  const onChangeForm = (e) => {
    setSignAccount({ ...signAccount, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const registerAcc = useSelector((state) => state.registerAcc);
  const handleSignUp = (event) => {
    event.preventDefault();
    dispatch(postRegister(signAccount));
    registerAcc.isSuccess && navigate("/login");
  };
  return (
    <section className="bg-slate-200">
      <div className="flex flex-col items-center w-screen h-screen justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-[500px] h-fit bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="user-sign-up"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Username
                </label>
                <input
                  onChange={onChangeForm}
                  value={user}
                  type="text"
                  name="user"
                  id="user-sign-up"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="abc"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email-sign-up"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Email
                </label>
                <input
                  onChange={onChangeForm}
                  value={email}
                  type="email"
                  name="email"
                  id="email-sign-up"
                  placeholder="abc@gmail.com"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  onChange={onChangeForm}
                  value={pass}
                  type="password"
                  name="pass"
                  id="password-sign-up"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <button
                onClick={handleSignUp}
                type="submit"
                className="w-full text-white bg-[#42B72A] bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Create an account
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                <Link to={"/login"}>Already have an account?</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
