import React from "react";
import { Link } from "react-router-dom";

const AdminLayout = ({ children }) => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-white">
                <h1 className="font-bold text-xl">Travel Adviser</h1>
              </Link>
            </div>
            <div className="flex items-center">
              <Link
                to="/admin/hotels"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Manage Hotels
              </Link>
              <Link
                to="/admin/flights"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Manage Flights
              </Link>

              <button
                onClick={handleLogout}
                className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-600 hover:bg-red-900 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-400 active:bg-indigo-400 transition ease-in-out duration-150"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
      {children}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <p className="text-white text-center">
              © 2023 Travel Adviser. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AdminLayout;
