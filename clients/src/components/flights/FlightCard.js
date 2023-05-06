import React from 'react';

const FlightCard = ({ flight }) => {
  return (
    <div className="border rounded-md p-4 mb-4">
      <div className="flex justify-between">
        <div className="text-xl font-bold">{flight.airline}</div>
        <div className="text-lg font-bold">{flight.price}</div>
      </div>
      <div className="flex justify-between mt-4">
        <div>
          <div className="font-bold">Departure</div>
          <div>{flight.departureAirport}</div>
          <div>{flight.departureTime}</div>
        </div>
        <div>
          <div className="font-bold">Arrival</div>
          <div>{flight.destinationAirport}</div>
          <div>{flight.arrivalTime}</div>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
