import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faPlay } from "@fortawesome/free-solid-svg-icons";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="p-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="bg-white  text-black p-4 px-16 text-xl rounded-lg hover:bg-opacity-80">
          <FontAwesomeIcon icon={faPlay} /> Play
        </button>
        <button className="mx-2 bg-gray-800  text-white p-4 px-16 text-xl rounded-lg hover:bg-opacity-80">
          <FontAwesomeIcon icon={faCircleInfo} /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
