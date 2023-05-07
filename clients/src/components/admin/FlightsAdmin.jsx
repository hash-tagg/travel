import React, { useState, useEffect } from "react";
import axios from "axios";
import { formatDate } from "../utils.js";
import AdminLayout from "./AdminLayout.jsx";

const FlightsAdmin = () => {
  const [flights, setFlights] = useState([]);
  const [formState, setFormState] = useState({
    flightNumber: "",
    airline: "",
    departureAirport: "",
    departureCity: "",
    departureCountry: "",
    departureDate: "",
    arrivalAirport: "",
    arrivalCity: "",
    arrivalCountry: "",
    arrivalDate: "",
    price: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [selectedFlight, setSelectedFlight] = useState(null);

  const fetchFlights = async () => {
    try {
      const response = await axios.get("/api/flights");
      setFlights(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchFlights();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const flightData = { ...formState };
      if (selectedFlight) {
        await axios.patch(`/api/flights/${selectedFlight._id}`, flightData);
      } else {
        await axios.post("/api/flights", flightData);
      }

      setFormState({
        flightNumber: "",
        airline: "",
        departureAirport: "",
        departureCity: "",
        departureCountry: "",
        departureDate: "",
        arrivalAirport: "",
        arrivalCity: "",
        arrivalCountry: "",
        arrivalDate: "",
        price: "",
      });

      setSelectedFlight(null);
      fetchFlights();
    } catch (error) {
      console.error(error);

      setFormErrors({ message: error.message });
    }
  };

  const handleFlightDelete = async (flightId) => {
    try {
      await axios.delete(`/api/flights/${flightId}`);
      fetchFlights();
    } catch (error) {
      console.error(error);
    }
  };

  const handleFlightEdit = (flight) => {
    setSelectedFlight(flight);
    setFormState({
      flightNumber: flight.flightNumber,
      airline: flight.airline,
      departureAirport: flight.departureAirport,
      departureCity: flight.departureCity,
      departureCountry: flight.departureCountry,
      departureDate: flight.departureDate,
      arrivalAirport: flight.arrivalAirport,
      arrivalCity: flight.arrivalCity,
      arrivalCountry: flight.arrivalCountry,
      arrivalDate: flight.arrivalDate,
      price: flight.price,
    });
  };

  return (
    <AdminLayout>
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-4">Flights Admin</h1>

      {/* Flight Form */}
      <form onSubmit={handleFormSubmit}>
        <h2 className="text-xl font-bold mb-2">
          {selectedFlight ? "Edit Flight" : "Add Flight"}
        </h2>

        {/* Flight Number */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="flightNumber"
          >
            Flight Number
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus
            border-blue-500"
            id="flightNumber"
            type="text"
            name="flightNumber"
            value={formState.flightNumber}
            onChange={handleInputChange}
            required
          />
          {formErrors.flightNumber && (
            <p className="text-red-500">{formErrors.flightNumber}</p>
          )}
        </div>

        {/* Airline */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="airline"
          >
            Airline
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus
            border-blue-500"
            id="airline"
            type="text"
            name="airline"
            value={formState.airline}
            onChange={handleInputChange}
            required
          />
          {formErrors.airline && (
            <p className="text-red-500">{formErrors.airline}</p>
          )}
        </div>

        {/* Departure Airport */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="departureAirport"
          >
            Departure Airport
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus
            border-blue-500"
            id="departureAirport"
            type="text"
            name="departureAirport"
            value={formState.departureAirport}
            onChange={handleInputChange}
            required
          />
          {formErrors.departureAirport && (
            <p className="text-red-500">{formErrors.departureAirport}</p>
          )}
        </div>

        {/* Departure City */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="departureCity"
          >
            Departure City
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus
            border-blue-500"
            id="departureCity"
            type="text"
            name="departureCity"
            value={formState.departureCity}
            onChange={handleInputChange}
            required
          />
          {formErrors.departureCity && (
            <p className="text-red-500">{formErrors.departureCity}</p>
          )}
        </div>

        {/* Departure Country */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="departureCountry"
          >
            Departure Country
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus
            border-blue-500"
            id="departureCountry"
            type="text"
            name="departureCountry"
            value={formState.departureCountry}
            onChange={handleInputChange}
            required
          />
          {formErrors.departureCountry && (
            <p className="text-red-500">{formErrors.departureCountry}</p>
          )}
        </div>

        {/* Departure Date */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="departureDate"
          >
            Departure Date
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus border-blue-500"
            id="departureDate"
            type="datetime-local"
            name="departureDate"
            value={formatDate(formState.departureDate)}
            onChange={handleInputChange}
            required
          />

          {formErrors.departureDate && (
            <p className="text-red-500">{formErrors.departureDate}</p>
          )}
        </div>

        {/* Arrival Airport */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="arrivalAirport"
          >
            Arrival Airport
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus
            border-blue-500"
            id="arrivalAirport"
            type="text"
            name="arrivalAirport"
            value={formState.arrivalAirport}
            onChange={handleInputChange}
            required
          />
          {formErrors.arrivalAirport && (
            <p className="text-red-500">{formErrors.arrivalAirport}</p>
          )}
        </div>

        {/* Arrival City */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="arrivalCity"
          >
            Arrival City
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus
            border-blue-500"
            id="arrivalCity"
            type="text"
            name="arrivalCity"
            value={formState.arrivalCity}
            onChange={handleInputChange}
            required
          />
          {formErrors.arrivalCity && (
            <p className="text-red-500">{formErrors.arrivalCity}</p>
          )}
        </div>

        {/* Arrival Country */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="arrivalCountry"
          >
            Arrival Country
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus
            border-blue-500"
            id="arrivalCountry"
            type="text"
            name="arrivalCountry"
            value={formState.arrivalCountry}
            onChange={handleInputChange}
            required
          />
          {formErrors.arrivalCountry && (
            <p className="text-red-500">{formErrors.arrivalCountry}</p>
          )}
        </div>

        {/* Arrival Date */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="arrivalDate"
          >
            Arrival Date
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus
            border-blue-500"
            id="arrivalDate"
            type="datetime-local"
            name="arrivalDate"
            value={formatDate(formState.arrivalDate)}
            onChange={handleInputChange}
            required
          />
          {formErrors.arrivalDate && (
            <p className="text-red-500">{formErrors.arrivalDate}</p>
          )}
        </div>

        {/* Price */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="price">
            Price
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus border-blue-500"
            id="price"
            type="number"
            name="price"
            value={formState.price}
            onChange={handleInputChange}
            required
          />

          {formErrors.price && (
            <p className="text-red-500">{formErrors.price}</p>
          )}
        </div>
        {/* Submit Button */}

        <div className="flex justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            {selectedFlight ? "Update Flight" : "Add Flight"}
          </button>
        </div>
      </form>
      {/* Flight List */}
      {flights.length > 0 ? (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Flights List</h2>
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Flight Number</th>
                <th className="px-4 py-2">Airline</th>
                <th className="px-4 py-2">Departure</th>
                <th className="px-4 py-2">Arrival</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {flights.map((flight, index) => (
                <tr key={flight._id}>
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{flight.flightNumber}</td>
                  <td className="border px-4 py-2">{flight.airline}</td>
                  <td className="border px-4 py-2">{`${flight.departureCity}, ${
                    flight.departureCountry
                  } (${flight.departureAirport}) - ${new Date(
                    flight.departureDate
                  ).toLocaleString()}`}</td>
                  <td className="border px-4 py-2">{`${flight.arrivalCity}, ${
                    flight.arrivalCountry
                  } (${flight.arrivalAirport}) - ${new Date(
                    flight.arrivalDate
                  ).toLocaleString()}`}</td>
                  <td className="border px-4 py-2">{`$${flight.price}`}</td>
                  <td className="border px-4 py-2">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline mr-2"
                      onClick={() => handleFlightEdit(flight)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                      onClick={() => handleFlightDelete(flight._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No flights found.</p>
      )}
    </div>
    </AdminLayout>
  );
};
export default FlightsAdmin;
