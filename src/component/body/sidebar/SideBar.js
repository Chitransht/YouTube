import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const sidebaropen = useSelector((store) => store.sidebar.isSideBarOpen);
  // Early Return
  if (!sidebaropen) return null;
  return (
    <div className="p-5 shadow-lg w-48">
      <ul>
        <li className="p-2 cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li className="p-2 cursor-pointer">Shorts</li>
        <li className="p-2 cursor-pointer">Live</li>
        <li className="p-2 cursor-pointer">Videos</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li className="p-2 cursor-pointer">Music</li>
        <li className="p-2 cursor-pointer">Sports</li>
        <li className="p-2 cursor-pointer">Gaming</li>
        <li className="p-2 cursor-pointer">Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li className="p-2 cursor-pointer">Music</li>
        <li className="p-2 cursor-pointer">Sports</li>
        <li className="p-2 cursor-pointer">Gaming</li>
        <li className="p-2 cursor-pointer">Movies</li>
      </ul>
    </div>
  );
};

export default SideBar;
