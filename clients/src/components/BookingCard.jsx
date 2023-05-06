import React from "react";

function BookingCard({ booking }) {
  const {
    guestName,
    guestEmail,
    checkInDate,
    checkOutDate,
    numGuests,
    createdAt,
  } = booking;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <h2 className="text-2xl font-bold mb-2">Booking Details</h2>
      <div className="mb-2">
        <span className="font-bold">Guest Name:</span> {guestName}
      </div>
      <div className="mb-2">
        <span className="font-bold">Guest Email:</span> {guestEmail}
      </div>
      <div className="mb-2">
        <span className="font-bold">Check-in Date:</span>{" "}
        {new Date(checkInDate).toLocaleDateString()}
      </div>
      <div className="mb-2">
        <span className="font-bold">Check-out Date:</span>{" "}
        {new Date(checkOutDate).toLocaleDateString()}
      </div>
      <div className="mb-2">
        <span className="font-bold">Number of Guests:</span> {numGuests}
      </div>
      <div className="text-gray-500 text-sm">
        <span className="font-bold">Booked on:</span>{" "}
        {new Date(createdAt).toLocaleString()}
      </div>
    </div>
  );
}

export default BookingCard;
