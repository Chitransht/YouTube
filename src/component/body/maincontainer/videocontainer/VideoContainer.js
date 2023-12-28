import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../../../../utils/Contant";
import VideoCards from "./VideoCards";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items);
  };

  useEffect(() => {
    getVideos();
  }, []);

  if (videos === null) return;

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VideoCards info={video} />{" "}
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
