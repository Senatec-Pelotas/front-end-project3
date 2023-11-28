import Image from "next/image";
import React from "react";
import searchIcon from "../assets/search-icon.png";

function SearchBar() {
  return (
    <form className="bg-white flex rounded-md w-max px-1 py-1">
      <input type="text" className="outline-none mr-1 rounded-md" />
      <Image src={searchIcon} alt="" width={24} height={18} />
    </form>
  );
}

export default SearchBar;
