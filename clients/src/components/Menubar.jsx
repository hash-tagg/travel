import React from "react";
import { FaPlane, FaHotel, FaCar, FaTrain } from "react-icons/fa";
import { Link } from "react-router-dom";

function MenuBar() {
  return (
    <nav className="bg-white pb-6 shadow-xl pt-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex justify-evenly w-full h-8">
          <li>
            <Link to="/flights" className="flex flex-col items-center text-gray-700">
              <FaPlane className="text-2xl" />
              <span> Flights</span>
            </Link>
          </li>
          <li>
            <Link to="/hotels" className="flex flex-col items-center text-gray-700">
              <FaHotel className="text-2xl" />
              <span>Hotels</span>
            </Link>
          </li>
          <li>
            <Link to="/cars" className="flex flex-col items-center text-gray-700">
              <FaCar className="text-2xl" />
              <span>Cars</span>
            </Link>
          </li>
          <li>
            <Link to="/trains" className="flex flex-col items-center text-gray-700">
              <FaTrain className="text-2xl" />
              <span>Trains</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MenuBar;
