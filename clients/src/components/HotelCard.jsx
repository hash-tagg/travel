import React from "react";

import { Link,  useNavigate } from "react-router-dom";

function HotelCard({ hotel }) {
  const navigate = useNavigate();

  const handleBookNowClick = () => {
    navigate(`/hotels/${hotel._id}`);
  };
 
  return (
    <div key={hotel._id} className="shadow-lg rounded-lg overflow-hidden">
      <Link to={`/hotels/${hotel._id}`}>
        <img
          className="w-full h-64 object-cover object-center"
          src={hotel.images[0]}
          alt={hotel.name}
        />
      </Link>

      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{hotel.name}</h2>
        <p className="text-gray-700 mb-2">{hotel.location}</p>
        <p className="font-bold mb-2">
          {hotel.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </p>
        <button
        onClick={handleBookNowClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Book Now
      </button>
      </div>
    </div>
  );
}

export default HotelCard;
