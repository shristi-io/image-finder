import React, { useState } from "react";

const SearchBar = ({ submit }) => {
  const [searchText, setSearchText] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    submit(searchText);
  };
  return (
    <div className="my-12">
      <form
        onSubmit={handleOnSubmit}
        className="flex justify-center items-center"
      >
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value.replace(/[0-9]/, ""))}
          type="text"
          placeholder="Search for images"
          className="outline-none border-gray-500 border-2 h-12 rounded-l-md px-4 py-2"
        />
        <button className="h-12 px-4 py-2 rounded-r-md bg-green-500 text-white font-bold text-xl flex justify-center items-center">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
