import React from "react";
import { useDispatch } from "react-redux";
import { toggelSideBar } from "../../utils/slices/SideBarSlice";

const Header = () => {
  const dispatch = useDispatch();

  const toggelhandler = () => {
    dispatch(toggelSideBar());
  };

  return (
    <div className="grid grid-flow-col px-5 py-2 shadow-lg ">
      <div className="flex col-span-1">
        <img
          onClick={toggelhandler}
          className="h-8 cursor-pointer"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
          alt="hamburger"
        />
        <img
          className="h-9 mx-2"
          src="https://www.webwise.ie/wp-content/uploads/2014/04/Slider8.jpg"
          alt="logo"
        />
      </div>
      <div className="col-span-10 px-10 pt-1">
        <input
          type="text"
          className="w-1/2 border border-gray-400 rounded-l-full"
        />
        <button className=" border border-gray-400 rounded-r-full px-4">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png"
          alt="userlogo"
        />
      </div>
    </div>
  );
};

export default Header;
