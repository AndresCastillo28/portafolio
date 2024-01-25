import React from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../hooks";
import { IoHome, IoMail, IoGitBranch, IoLogOut } from "react-icons/io5";

export const SideBar = () => {
  const { startLogout } = useAuthStore();

  return (
    <div className="bg-gray-800 w-auto p-4 h-screen">
      <ul className="space-y-7">
        <li>
          <Link to="/" className="text-white hover:text-gray-300 font-semibold text-lg flex items-center">
            <IoHome className="mr-2 text-xl" />
            Home
          </Link>
        </li>
        <li>
          <Link to="messages" className="text-white hover:text-gray-300 font-semibold text-lg flex items-center">
            <IoMail className="mr-2 text-xl" />
            Messages
          </Link>
        </li>
        <li>
          <Link to="projects" className="text-white hover:text-gray-300 font-semibold text-lg flex items-center">
            <IoGitBranch className="mr-2 text-xl" />
            Projects
          </Link>
        </li>

        <li>
          <button
            className="btn btn-sm font-semibold py-2 px-4 rounded flex items-center"
            onClick={() => startLogout()}
          >
            <IoLogOut className="mr-2 text-xl" />
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};
