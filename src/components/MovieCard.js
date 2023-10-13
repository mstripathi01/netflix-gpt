import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-36 md:pr-4 cursor-pointer hover:opacity-70">
      <img alt="Movie Card" src={IMG_CDN + posterPath} />
    </div>
  );
};

export default MovieCard;
