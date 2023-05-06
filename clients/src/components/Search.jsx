import React, { useState } from "react";
import axios from "axios";
import HotelCard from "./HotelCard";

function Search() {
  const [search, setSearch] = useState("");
  const [hotels, setHotels] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const searchHotels = async (location) => {
    try {
      const response = await axios.get(
        `/api/search?location=${encodeURIComponent(location.trim())}`
      );
      const data = response.data;
      setHotels(data);
      setShowModal(true);
    } catch (error) {
      console.error("Error fetching hotels:", error);
    }
  };

  const handleSearch = () => {
    if (search.trim()) {
      searchHotels(search);
    }
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
        className="flex items-center"
      >
        <input
          type="text"
          placeholder="Search by location"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-3 py-2 border rounded-l-md text-gray-900 focus:outline-none focus:shadow-outline"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        >
          Search
        </button>
      </form>
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center pt-4 px-4 pb-20 text-center">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-7xl sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="bg-white px-4 pt-5 pb-4">
                <div>
                  <div className="mt-3 text-center">
                    <div className="flex justify-between items-center">
                      <h3
                        className="text-lg leading-6 font-medium text-gray-900"
                        id="modal-headline"
                      >
                        Hotels in {search}
                      </h3>
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                    </div>
                    <div className="mt-2">
                      {hotels.map((hotel, index) => (
                        <div key={hotel._id || index}>
                          <HotelCard hotel={hotel} />
                        </div>
                      ))} 
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Search;
