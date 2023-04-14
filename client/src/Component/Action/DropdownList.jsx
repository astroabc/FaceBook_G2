import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { modalPost } from "../../Redux/Slice/PostModalSlice";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DropdownList() {
  const onLogOut = () => {
    window.location.href = "/";
    sessionStorage.clear();
  };
  const loginAcc = useSelector((state) => state.loginAcc);

  const dispatch = useDispatch();
  const onClickSetting = () => {
    dispatch(
      modalPost({
        statusSetting: true,
      }),
    );
  };
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div className=" flex items-center">
        <Menu.Button>
          <img
            className="w-9 h-9 rounded-full bg-cover"
            src={loginAcc.avatar}
            alt=""
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <div
                  onClick={onClickSetting}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-6 py-4 font-semibold",
                  )}
                >
                  Account settings
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-6 py-4 font-semibold",
                  )}
                >
                  Support
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-6 py-4 font-semibold",
                  )}
                >
                  License
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={onLogOut}
                  type="submit"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block w-full px-6 py-4 text-left font-semibold",
                  )}
                >
                  Sign out
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
