import React from "react";

const VideoCards = ({ info }) => {
  console.log(info);
  if (!info) return;
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-[17rem] shadow-lg cursor-pointer">
      <img className=" rounded-lg w-full " src={thumbnails.medium.url} alt="logo" />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} Views</li>
      </ul>
    </div>
  );
};

export default VideoCards;
