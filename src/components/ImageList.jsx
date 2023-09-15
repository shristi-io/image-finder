import React from "react";
import Image from "./Image";

const ImageList = ({ imageList, totalPages }) => {
  console.log(totalPages);
  return (
    <section className="flex flex-col gap-8 py-8 px-4">
      <div className="flex justify-center items-center">
        <p>{Number(totalPages) * 12} results found</p>
      </div>
      <div className="grid max-sm:grid-cols-2 sm:grid-cols-4 gap-8 items-stretch">
        {imageList.map((img) => {
          return (
            <Image
              key={img.id}
              url={img.urls.regular}
              desc={img.alt_description}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ImageList;
