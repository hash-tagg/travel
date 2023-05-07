import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../Layout";

const Trains = () => {
  const [trains, setTrains] = useState([]);
  const [searchData, setSearchData] = useState({
    origin: "",
    destination: "",
  });

  useEffect(() => {
    fetchTrains();
  }, []);

  const fetchTrains = async () => {
    try {
      const response = await axios.get("/api/trains");
      setTrains(response.data);
    } catch (error) {
      console.error("Error fetching trains:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSearchData({ ...searchData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const filteredTrains = trains.filter((train) => {
      const { origin, destination } = searchData;
      const matchesOrigin =
        !origin || train.origin.toLowerCase().includes(origin.toLowerCase());
      const matchesDestination =
        !destination ||
        train.destination.toLowerCase().includes(destination.toLowerCase());
      return matchesOrigin && matchesDestination;
    });
    setTrains(filteredTrains);
  };

  return (
    <Layout>
      {" "}
      <div className="bg-gray-100 min-h-screen">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-4">Find Trains</h1>

          <form onSubmit={handleSubmit} className="mb-4">
            <div className="flex items-center space-x-4">
              <div>
                <label
                  htmlFor="origin"
                  className="block font-medium text-gray-700"
                >
                  From
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    type="text"
                    id="origin"
                    name="origin"
                    value={searchData.origin}
                    onChange={handleInputChange}
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="destination"
                  className="block font-medium text-gray-700"
                >
                  To
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    type="text"
                    id="destination"
                    name="destination"
                    value={searchData.destination}
                    onChange={handleInputChange}
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Search
              </button>
            </div>
          </form>

          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {trains.map((train) => (
              <li
                key={train.trainNumber}
                className="bg-white shadow overflow-hidden rounded-md"
              >
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">
                    {train.trainName}
                  </h3>
                  <div className="mt-2 flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-indigo-500 rounded-md p-1">
                        <svg
                          className="h-6 w-6 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="{2}"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div className="ml-2 text-sm text-gray-500">
                        <p>
                          <span className="font-medium text-gray-900">
                            Origin:
                          </span>{" "}
                          {train.origin}
                        </p>
                        <p>
                          <span className="font-medium text-gray-900">
                            Destination:
                          </span>{" "}
                          {train.destination}
                        </p>
                        <p>
                          <span className="font-medium text-gray-900">
                            Train Number:
                          </span>{" "}
                          {train.trainNumber}
                        </p>
                       
                        <p>
                          <span className="font-medium text-gray-900">
                            Departure Time:
                          </span>{" "}
                          {train.departureTime}
                        </p>
                        <p>
                          <span className="font-medium text-gray-900">
                            Arrival Time:
                          </span>{" "}
                          {train.arrivalTime}
                        </p>
                       
                        
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Trains;
