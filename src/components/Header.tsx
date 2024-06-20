import React from "react";
import UserIcon from "../icons/UserIcon"; // Ensure the path is correct

const Header = () => {
  return (
    <div className="flex p-4 items-center justify-between">
      <div className="flex items-center">
        <div className="rounded-full w-10 h-10 p-1 bg-black flex items-center justify-center">
          <UserIcon></UserIcon>
        </div>
        <h3 className="ml-2 text-white">username</h3>
      </div>
      <div className="flex items-center">
        <button
          type="button"
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Sign out
        </button>
      </div>
    </div>
  );
};

export default Header;
