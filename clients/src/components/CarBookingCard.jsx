import React from 'react';

const CarBookingCard = ({ booking } ) => {
  return (
    <div  className="car-booking-card">
      <h3>Car Booking</h3>
      <p>Email: {booking.Email}</p>
      <p>Name: {booking.Name}</p>
      <p>Car Make: {booking.car.make}</p>
      <p>Car Model: {booking.car.model}</p>
      <p>Car Year: {booking.car.year}</p>
      <p>License Plate: {booking.car.licensePlate}</p>
      <p>Rental Start: {new Date(booking.rentalStart).toLocaleDateString()}</p>
      <p>Rental End: {new Date(booking.rentalEnd).toLocaleDateString()}</p>
      <p>Price Per Day: ${booking.pricePerDay.toFixed(2)}</p>
      <p>Total Days: {Math.ceil((new Date(booking.rentalEnd) - new Date(booking.rentalStart)) / (1000 * 60 * 60 * 24))}</p>
      <p>Total Price: ${(booking.pricePerDay * Math.ceil((new Date(booking.rentalEnd) - new Date(booking.rentalStart)) / (1000 * 60 * 60 * 24))).toFixed(2)}</p>
    </div>
  );
};

export default CarBookingCard;
