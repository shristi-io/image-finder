import React from "react";

const Pagination = ({ page, pageHandler, totalPages }) => {
  const handleNextClick = () => {
    pageHandler(page + 1);
  };
  const handlePrevClick = () => {
    pageHandler(page - 1);
  };

  return (
    <div className="flex justify-between items-center px-4 mt-4 mb-8">
      <button
        onClick={handlePrevClick}
        className={`font-bold text-white px-4 py-2 text-lg rounded-md ${
          page === 1 ? "bg-red-500" : "bg-green-500"
        }`}
        disabled={page === 1}
      >
        Prev
      </button>
      <button
        disabled={page === totalPages}
        onClick={handleNextClick}
        className="font-bold text-white px-4 py-2 text-lg rounded-md bg-green-500"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
