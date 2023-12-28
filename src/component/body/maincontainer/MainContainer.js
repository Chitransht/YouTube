import React from "react";
import ButtonList from "./buttonlist/ButtonList";
import VideoContainer from "./videocontainer/VideoContainer";

const s = () => {
  return (
    <div className="flex flex-col col-span-11">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default s;
