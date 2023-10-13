import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faPlay } from "@fortawesome/free-solid-svg-icons";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/3">{overview}</p>
      <div className="my-4 md:0 flex flex-col md:flex-row items-center">
        <button className="bg-white text-black py-1 md:py-4 px-10 text-xl rounded-lg hover:bg-opacity-80 mb-2 md:mb-0 md:mr-2">
          <FontAwesomeIcon icon={faPlay} /> Play
        </button>
        <button className="hidden md:inline-block bg-gray-800 text-white p-4 px-6 text-xl rounded-lg hover:bg-opacity-80">
          <FontAwesomeIcon icon={faCircleInfo} /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
