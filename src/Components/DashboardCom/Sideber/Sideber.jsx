import { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { BsFillHouseAddFill, BsGraphUp } from "react-icons/bs";
import { FcSettings } from "react-icons/fc";
import { GrLogout } from "react-icons/gr";
import { MdHomeWork } from "react-icons/md";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import MenuItem from "./Menu/MenuItem";

const Sidebar = () => {
  const { logOut } = useAuth() || {};
  const [isActive, setActive] = useState(false);

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link to="/" className="text-xl">
              <h1 className="gap-0 font-extrabold text-sm ">
                <span className="p-2 lg:text-3xl bg-300% font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">
                  Azure-Nest
                </span>
              </h1>
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-[#2A80B9] mx-auto">
              <Link to="/" className="text-xl">
                <h1 className="gap-0 font-extrabold text-sm ">
                  <span className="p-2 lg:text-3xl bg-300% font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">
                    Azure-Nest
                  </span>
                </h1>
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            {/* Conditional toggle button here.. */}

            {/*  Menu Items */}
            <nav>
              {/* Statistics */}
              <MenuItem
                label="Statistics"
                address="/dashboard"
                icon={BsGraphUp}
              />

              {/* Add Room */}
              <MenuItem
                label="Add Room"
                address="add-room"
                icon={BsFillHouseAddFill}
              />

              {/* My Listing */}
              <MenuItem
                label="My Listings"
                address="my-listings"
                icon={MdHomeWork}
              />
            </nav>
          </div>
        </div>

        <div>
          <hr />

          {/* Profile Menu */}
          <MenuItem label="Profile" address="/profile" icon={FcSettings} />

          <button
            onClick={logOut}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
