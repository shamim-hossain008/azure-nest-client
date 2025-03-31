import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../../../../src/styles.css";
import Theme from "../../../../Components/Theme Controller/Theme";
import useAuth from "../../../../hooks/useAuth";

const Nav = () => {
  const { user, logOut } = useAuth();

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
        <Link to="/" className=" text-red-400 text-xl ">
          <h1 className="gap-0 font-extrabold text-sm ">
            <span className="p-2 lg:text-3xl bg-300% font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">
              Azure-Nest
            </span>
          </h1>
        </Link>
      </div>
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
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge text-green-600">
                      {user?.displayName}
                    </span>
                  </a>
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
