import React from "react";

const Image = ({ url, desc }) => {
  return (
    <div className="flex justify-center items-center shadow-lg shadow-black rounded-md">
      <a href={url} target="_blank">
        <img width={300} height={300} src={url} alt={desc} />
      </a>
    </div>
  );
};

export default Image;
