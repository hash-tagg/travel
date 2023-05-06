import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Search from "./Search";
import UserCard from "./UserCard";

function Navbar() {
  const location = useLocation();
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  useEffect(() => {
    const userFromLocalStorage = JSON.parse(localStorage.getItem("user"));
    if (userFromLocalStorage) {
      setUser(userFromLocalStorage);
    }
  }, []);

  return (
    <nav className="bg-white shadow-2xl outline outline-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/">
                <h2 className="text-gray-900 font-bold text-2xl">
                  Travel Adviser
                </h2>
              </Link>
            </div>
          </div>
          
          <Search />
          {user ? (
            <div className="ml-4 flex items-center md:ml-6">
              <div className="ml-3 relative">
                <div>
                  <button
                    type="button"
                    className="max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid"
                    id="user-menu"
                    aria-label="User menu"
                    aria-haspopup="true"
                  >
                    <UserCard user={user} />
                  </button>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-600 hover:bg-red-900 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-400 active:bg-indigo-400 transition ease-in-out duration-150"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="md:block sm:text-sm lg:text-xl bg-white">
              <div className="ml-10 flex items-center  font-bold">
                <Link
                  to="/signup"
                  className={`mr-5 ${
                    location.pathname === "/signup"
                      ? "text-blue-600"
                      : "text-gray-600"
                  } hover:text-blue-600`}
                >
                  SignUp
                </Link>
                <Link
                  to="/login"
                  className={`mr-5 bg-blue-600 text-white p-2 px-4 rounded-md ${
                    location.pathname === "/login" ? "bg-blue-700" : ""
                  } hover:bg-blue-700`}
                >
                  Login
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
