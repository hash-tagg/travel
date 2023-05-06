import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white shadow-2xl text-gray-900 py-4 outline outline-gray-300 bottom-0 w-full">
      <div div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="container mx-auto flex justify-between items-center">
          <p>&copy; 2023 Travel Adviser</p>
          <div>
            <a href="#" className="hover:text-gray-100 mx-2">
              About
            </a>
            <a href="#" className="hover:text-gray-100 mx-2">
              Contact Us
            </a>
          </div>
        </div>
        <Link to="/admin/login">Admin Login</Link>
      </div>
    </footer>
  );
}

export default Footer;
