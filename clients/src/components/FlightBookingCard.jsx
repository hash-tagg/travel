import React from 'react';

const FlightBookingCard = ({ booking }) => {
  const {
    flight: {
      flightNumber,
      airline,
      departureAirport,
      departureCity,
      arrivalAirport,
      arrivalCity,
    },
    bookingDate,
    passengers,
    totalPrice,
  } = booking;

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
      <h2 className="text-xl font-bold mb-4">{`${airline} - ${flightNumber}`}</h2>
      <div className="flex justify-between">
        <div>
          <p className="font-semibold">Departure</p>
          <p>{departureAirport}</p>
          <p>{departureCity}</p>
        </div>
        <div>
          <p className="font-semibold">Arrival</p>
          <p>{arrivalAirport}</p>
          <p>{arrivalCity}</p>
        </div>
      </div>
      <hr className="my-4" />
      <div>
        <p>
          <span className="font-semibold">Booking Date: </span>
          {new Date(bookingDate).toLocaleString()}
        </p>
        <p>
          <span className="font-semibold">Passengers: </span>
          {passengers}
        </p>
        <p>
          <span className="font-semibold">Total Price: </span>
          {`$${totalPrice}`}
        </p>
      </div>
    </div>
  );
};

export default FlightBookingCard;
