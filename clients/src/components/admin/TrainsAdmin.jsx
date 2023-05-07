import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminLayout from "./AdminLayout";

const TrainsAdmin = () => {
  const [trains, setTrains] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  


  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const [trainData, setTrainData] = useState({
    trainNumber: "",
    trainName: "",
    origin: "",
    destination: "",
    departureTime: "",
    arrivalTime: "",
    daysOfOperation: [],
    classes: [],
    stops: [],
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
    setTrainData({ ...trainData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/api/trains", trainData);
      fetchTrains();
      setTrainData({
        trainNumber: "",
        trainName: "",
        origin: "",
        destination: "",
        departureTime: "",
        arrivalTime: "",
        daysOfOperation: [],
        classes: [],
        stops: [],
      });
    } catch (error) {
      console.error("Error creating train:", error);
    }
  };

  const handleUpdate = async (trainNumber) => {
    // Fetch train data by trainNumber
    alert("Update Not Available Currently");
    // try {
    //   const response = await axios.get(`/api/trains/${trainNumber}`);
    //   // Populate the form with the train data for editing
    //   setTrainData(response.data);
    // } catch (error) {
    //   console.error("Error fetching train:", error);
    // }
  };
  
  const handleDelete = async (trainNumber) => {
    // Delete the train with the given trainNumber
    try {
      await axios.delete(`/api/trains/${trainNumber}`);
      // Refresh the list of trains
      fetchTrains();
    } catch (error) {
      console.error("Error deleting train:", error);
    }
  };
  

  return (
    <AdminLayout>
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-4">Trains Admin</h1>

        {/* Button to open the modal */}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
          onClick={toggleModal}
        >
          Add Train
        </button>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div
                className="fixed inset-0 transition-opacity"
                aria-hidden="true"
              >
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>

              <span
                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                  <div className="flex flex-col">
                    <label htmlFor="trainNumber" className="text-gray-700">
                      Train Number:
                    </label>
                    <input
                      type="number"
                      id="trainNumber"
                      name="trainNumber"
                      value={trainData.trainNumber}
                      onChange={handleInputChange}
                      required
                      className="border-2 border-gray-300 p-2 rounded"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="trainName" className="text-gray-700">
                      Train Name:
                    </label>
                    <input
                      type="text"
                      id="trainName"
                      name="trainName"
                      value={trainData.trainName}
                      onChange={handleInputChange}
                      required
                      className="border-2 border-gray-300 p-2 rounded"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="origin" className="text-gray-700">
                      Origin:
                    </label>
                    <input
                      type="text"
                      id="origin"
                      name="origin"
                      value={trainData.origin}
                      onChange={handleInputChange}
                      required
                      className="border-2 border-gray-300 p-2 rounded"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="destination" className="text-gray-700">
                      Destination:
                    </label>
                    <input
                      type="text"
                      id="destination"
                      name="destination"
                      value={trainData.destination}
                      onChange={handleInputChange}
                      required
                      className="border-2 border-gray-300 p-2 rounded"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="departureTime" className="text-gray-700">
                      Departure Time:
                    </label>
                    <input
                      type="text"
                      id="departureTime"
                      name="departureTime"
                      value={trainData.departureTime}
                      onChange={handleInputChange}
                      required
                      className="border-2 border-gray-300 p-2 rounded"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="arrivalTime" className="text-gray-700">
                      Arrival Time:
                    </label>
                    <input
                      type="text"
                      id="arrivalTime"
                      name="arrivalTime"
                      value={trainData.arrivalTime}
                      onChange={handleInputChange}
                      required
                      className="border-2 border-gray-300 p-2 rounded"
                    />
                  </div>

                  {/* Add input fields for daysOfOperation, classes, and stops here */}
                  <div className="flex flex-wrap">
                    <label className="text-gray-700 w-full mb-2">
                      Days of Operation:
                    </label>
                    {[
                      "Sunday",
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                    ].map((day) => (
                      <div
                        key={day}
                        className="flex items-center space-x-2 mb-2 mr-2"
                      >
                        <input
                          type="checkbox"
                          id={day}
                          name={day}
                          checked={trainData.daysOfOperation.includes(day)}
                          onChange={() => {
                            if (trainData.daysOfOperation.includes(day)) {
                              setTrainData({
                                ...trainData,
                                daysOfOperation:
                                  trainData.daysOfOperation.filter(
                                    (d) => d !== day
                                  ),
                              });
                            } else {
                              setTrainData({
                                ...trainData,
                                daysOfOperation: [
                                  ...trainData.daysOfOperation,
                                  day,
                                ],
                              });
                            }
                          }}
                          className="form-checkbox h-5 w-5 text-green-500"
                        />
                        <label htmlFor={day} className="text-gray-700">
                          {day}
                        </label>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap">
                    <label className="text-gray-700 w-full mb-2">
                      Classes:
                    </label>
                    {[
                      "First AC",
                      "Second AC",
                      "Third AC",
                      "Sleeper",
                      "General",
                    ].map((className) => (
                      <div
                        key={className}
                        className="flex items-center space-x-2 mb-2 mr-2"
                      >
                        <input
                          type="checkbox"
                          id={className}
                          name={className}
                          checked={trainData.classes.includes(className)}
                          onChange={() => {
                            if (trainData.classes.includes(className)) {
                              setTrainData({
                                ...trainData,
                                classes: trainData.classes.filter(
                                  (c) => c !== className
                                ),
                              });
                            } else {
                              setTrainData({
                                ...trainData,
                                classes: [...trainData.classes, className],
                              });
                            }
                          }}
                          className="form-checkbox h-5 w-5 text-green-500"
                        />
                        <label htmlFor={className} className="text-gray-700">
                          {className}
                        </label>
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="text-gray-700 w-full mb-2">Stops:</label>
                    {trainData.stops.map((stop, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex space-x-2">
                          <label
                            htmlFor={`stationCode${index}`}
                            className="text-gray-700"
                          >
                            Station Code:
                          </label>
                          <input
                            type="text"
                            id={`stationCode${index}`}
                            name={`stationCode${index}`}
                            value={stop.stationCode}
                            onChange={(e) => {
                              const newStops = [...trainData.stops];
                              newStops[index].stationCode = e.target.value;
                              setTrainData({ ...trainData, stops: newStops });
                            }}
                            className="border border-gray-300 p-2 rounded"
                          />
                        </div>

                        {/* ... (rest of the input fields for stops remain the same) */}

                        <button
                          type="button"
                          onClick={() => {
                            const newStops = [...trainData.stops];
                            newStops.splice(index, 1);
                            setTrainData({ ...trainData, stops: newStops });
                          }}
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2"
                        >
                          Remove Stop
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => {
                        setTrainData({
                          ...trainData,
                          stops: [
                            ...trainData.stops,
                            {
                              stationCode: "",
                              stationName: "",
                              arrivalTime: "",
                              departureTime: "",
                            },
                          ],
                        });
                      }}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                    >
                      Add Stop
                    </button>
                  </div>

                  <div className="flex items-center justify-end space-x-4">
                    <button
                      type="button"
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      onClick={toggleModal}
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Save Train
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

<ul className="mt-6 space-y-2">
  {trains.map((train) => (
    <li key={train.trainNumber} className="bg-gray-100 p-2 rounded flex justify-between items-center">
      <span>{train.trainName}</span>
      <div className="space-x-2">
        <button
          type="button"
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded"
          onClick={() => handleUpdate(train.trainNumber)}
        >
          Update
        </button>
        <button
          type="button"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
          onClick={() => handleDelete(train.trainNumber)}
        >
          Delete
        </button>
      </div>
    </li>
  ))}
</ul>

      </div>
    </AdminLayout>
  );
};

export default TrainsAdmin;
