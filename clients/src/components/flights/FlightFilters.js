import { useState } from "react";

const FlightFilters = ({ onApplyFilters }) => {
  const [departureCity, setDepartureCity] = useState("");
  const [arrivalCity, setArrivalCity] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const handleApplyFilters = () => {
    onApplyFilters({
      departureCity,
      arrivalCity,
      departureDate,
      returnDate,
      priceRange,
    });
  };

  const handlePriceRangeChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Filters</h2>
      <div className="mb-4">
        <label className="block mb-2 font-medium">Departure City</label>
        <input
          type="text"
          value={departureCity}
          onChange={(e) => setDepartureCity(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-medium">Arrival City</label>
        <input
          type="text"
          value={arrivalCity}
          onChange={(e) => setArrivalCity(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-medium">Departure Date</label>
        <input
          type="date"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-medium">Return Date</label>
        <input
          type="date"
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
      </div>

      <button
        className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
        onClick={handleApplyFilters}
      >
        Apply Filters
      </button>
    </div>
  );
};

export default FlightFilters;
