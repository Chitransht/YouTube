import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { sidebarclose } from "../../utils/slices/SideBarSlice";
import { useSearchParams } from "react-router-dom";

const Watch = () => {
  const dispatch = useDispatch();
  const [searchparam] = useSearchParams();
  console.log(searchparam.get("v"));
  useEffect(() => {
    dispatch(sidebarclose());
  }, []);

  return (
    <div className="px-5">
      <iframe
        width="1000"
        height="500"
        src={"https://www.youtube.com/embed/" + searchparam.get("v")}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Watch;
