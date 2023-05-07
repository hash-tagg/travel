import { useState, useEffect } from "react";
import axios from "axios";
import FlightFilters from "./FlightFilters";
import Layout from "../Layout";
import { formatCurrency } from "../utils";

const SearchFlights = () => {
  const [flights, setFlights] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await axios.get("/api/flights");
        setFlights(response.data);
        setFilteredFlights(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFlights();
  }, []);

  const applyFilters = (filters) => {
    const { departureCity, arrivalCity, departureDate, returnDate, priceRange } = filters;

    let filtered = flights.filter((flight) => {
      if (departureCity && !flight.departureCity.toLowerCase().includes(departureCity.toLowerCase())) {
        return false;
      }
      if (arrivalCity && !flight.arrivalCity.toLowerCase().includes(arrivalCity.toLowerCase())) {
        return false;
      }
      if (departureDate && new Date(flight.departureDate) < new Date(departureDate)) {
        return false;
      }
      if (returnDate && new Date(flight.returnDate) > new Date(returnDate)) {
        return false;
      }
      if (priceRange && (flight.price < priceRange[0] || flight.price > priceRange[1])) {
        return false;
      }
      return true;
    });

    setFilteredFlights(filtered);
  };

  const handlePriceRangeChange = (event, newValue) => {
    setPriceRange(newValue);
    applyFilters({ priceRange: newValue });
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-8">
          {/* Filters */}
          <div className="md:col-span-1 p-4 border rounded-md">
            <h2 className="text-xl font-bold mb-4">Filters</h2>
            <FlightFilters onApplyFilters={applyFilters} priceRange={priceRange} onPriceRangeChange={handlePriceRangeChange} />
          </div>

          {/* Flight list */}
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredFlights.length === 0 ? (
                <div className="text-center text-gray-500 py-12">
                  No flights match your filters
                </div>
              ) : (
                filteredFlights.map((flight) => (
                  <div key={flight._id} className="p-4 border rounded-md">
                    <h2 className="text-xl font-bold">
                      {flight.airline} - {flight.flightNumber}
                    </h2>
                    <p className="mt-2">
                      {flight.departureCity} ({flight.departureAirport}) to{" "}
                      {flight.arrivalCity} ({flight.arrivalAirport})
                    </p>
                    <p className="mt-2">
                      Departure: {new Date(flight.departureDate).toLocaleString()}
                    </p>
                    <p className="mt-2">
                    
                    Return: {new Date(flight.arrivalDate).toLocaleString()}
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <div className="font-medium">
                    {formatCurrency(flight.price)}
                  </div>
                  <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">
                    Book now
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  </div>
</Layout>
);
};

export default SearchFlights;