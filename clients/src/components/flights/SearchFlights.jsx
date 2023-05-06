import { useState, useEffect } from "react";
import axios from "axios";
import FlightFilters from "./FlightFilters";
import Layout from "../Layout";

const SearchFlights = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await axios.get("/api/flights");
        setFlights(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFlights();
  }, []);

  const applyFilters = async (filters) => {
    try {
      const { departureCity, arrivalCity, departureDate, returnDate } = filters;
      const response = await axios.get("/api/flights", {
        params: {
          departureCity,
          arrivalCity,
          departureDate,
          returnDate,
        },
      });
      setFlights(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    applyFilters({});
  }, []);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-8">
          {/* Filters */}
          <div className="md:col-span-1 p-4 border rounded-md">
            <h2 className="text-xl font-bold mb-4">Filters</h2>
            <div className="md:col-span-1 p-4 border rounded-md">
              <FlightFilters
                onApplyFilters={(filters) => applyFilters(filters)}
              />
            </div>
          </div>

          {/* Flight list */}
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {flights.map((flight) => (
                <div key={flight._id} className="p-4 border rounded-md">
                  <h2 className="text-xl font-bold">
                    {flight.airline} - {flight.flightNumber}
                  </h2>
                  <p className="mt-2">
                    {flight.departureCity} ({flight.departureAirport}) to{" "}
                    {flight.arrivalCity} ({flight.arrivalAirport})
                  </p>
                  <div className="mt-4 flex justify-between items-center">
                    <div className="font-medium">${flight.price}</div>
                    <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">
                      Book now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SearchFlights;
