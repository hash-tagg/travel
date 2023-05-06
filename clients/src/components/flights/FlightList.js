import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Layout from "../Layout";

const FlightList = () => {
  const [flights, setFlights] = useState([]);
  const navigate = useNavigate();

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

  const handleBookNow = (flightId) => {
    const selectedFlight = flights.find((flight) => flight._id === flightId);
    navigate(`/booking/${flightId}`, { state: selectedFlight });
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center mt-6">
          <div>
            <h2 className="text-2xl font-bold">All Flights</h2>
          </div>
          <div>
            <Link
              to="/flights/search"
              className="px-4 p-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-900"
            >
             
              Search Flights
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 m-8 p-2 ">
          {flights.map((flight) => (
            <div key={flight._id} className="p-4 border rounded-md bg-white ">
              <h2 className="text-xl font-bold">
                {flight.airline} - {flight.flightNumber}
              </h2>
              <p className="mt-2">
                {flight.departureCity} ({flight.departureAirport}) to{" "}
                {flight.arrivalCity} ({flight.arrivalAirport})
              </p>
              <div className="mt-4 flex justify-between items-center">
                <div className="font-medium">${flight.price}</div>
                <button
                  className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
                  onClick={() => handleBookNow(flight._id)}
                >
                  Book now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default FlightList;
