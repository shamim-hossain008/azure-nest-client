import { useState } from "react";
import { toast } from "react-hot-toast";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../../../../src/styles.css";
import HostModal from "../../../../Components/Modal/HostModal";
import Theme from "../../../../Components/Theme Controller/Theme";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const Nav = () => {
  const { user, logOut } = useAuth();
  const axiosSecure = useAxiosSecure();
  // for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const modalHandler = async () => {
    console.log("I want to be a host");

    try {
      const currentUser = {
        email: user?.email,
        role: "gust",
        status: "Requested",
      };
      const { data } = await axiosSecure.put(`/user`, currentUser);
      console.log(data);
      if (data?.modifiedCount > 0) {
        toast.success("Success! Please wait for admin confirmation");
      } else {
        toast.success("Please! Wait for admin approval");
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error);
    } finally {
      closeModal();
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="navbar sticky z-10 top-0 bg-white shadow-sm">
      <div className="flex-1">
        {/* Logo */}
        <Link to="/" className=" text-red-400 text-xl ">
          <h1 className="gap-0 font-extrabold text-sm ">
            <span className="p-2 lg:text-3xl bg-300% font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">
              Azure-Nest
            </span>
          </h1>
        </Link>
      </div>
      {/* Become A Host btn */}
      <div className=" hidden md:block">
        {/* {!user && ( */}
        <button
          disabled={!user}
          onClick={() => setIsModalOpen(true)}
          className="disabled:cursor-not-allowed cursor-pointer hover:bg-neutral-100 py-3 px-4 text-sm font-semibold rounded-full  transition"
        >
          Host your home
        </button>
        {/* )} */}
      </div>
      {/* Modal for host */}
      <HostModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        modalHandler={modalHandler}
      />
      <div className="flex-none">
        <div className="dropdown dropdown-end"></div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              {user?.photoURL ? (
                <img alt="Profile" src={user.photoURL} />
              ) : (
                <div className="w-10 h-10 bg-gray-300 rounded-full">
                  <FaUserCircle className="w-full h-full" />
                </div>
              )}
            </div>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {user ? (
              <>
                <Link
                  to="/dashboard"
                  className="px-4 hover:bg-neutral-100 transition font-semibold cursor-pointer"
                >
                  Dashboard
                </Link>
                <li>
                  <Link to="/profile" className="flex justify-around">
                    Profile
                    <span className="badge p-2 text-green-600">
                      {user?.displayName}
                    </span>
                  </Link>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <button onClick={handleSignOut}>Sign out</button>
                </li>
              </>
            ) : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
      <Theme />
    </div>
  );
};

export default Nav;
