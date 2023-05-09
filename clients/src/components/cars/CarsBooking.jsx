import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import Layout from "../Layout";

const CarBooking = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const car = location.state.car;

  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user?.id;

  const [booking, setBooking] = useState({
    Email: '',
    Name: '',
    car: { make: car.make, model: car.model, year: car.year, licensePlate: car.licensePlate },
    rentalStart: '',
    rentalEnd: '',
    pricePerDay: car.pricePerDay,
    user: userId,
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBooking((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleBooking = async (e) => {
    e.preventDefault();
    console.log(booking);
    try {
      const response = await axios.post("/api/carBookings", booking);
      console.log(response.data);
      alert("Booking successful!");
      navigate("/profile");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Layout>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4">
        <h2 className="text-2xl font-bold mb-2">
          {location.state.car.make} {location.state.car.model}
        </h2>
        <p>Year: {location.state.car.year}</p>
        <p>License Plate: {location.state.car.licensePlate}</p>
        <p>Color: {location.state.car.color}</p>
        <p>Category: {location.state.car.category}</p>
        <p>Seats: {location.state.car.seats}</p>
        <p>Price per day: ₹{location.state.car.pricePerDay}</p>
        <p>Available: {location.state.car.available ? "Yes" : "No"}</p>

        <form onSubmit={handleBooking}>
          <div className="flex items-center mt-4">
            <label htmlFor="start-date" className="mr-4">
              Start Date:
            </label>
            <input
              type="date"
              id="start-date"
              name="rentalStart"
              value={booking.rentalStart}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex items-center mt-4">
            <label htmlFor="end-date" className="mr-4">
              End Date:
            </label>
            <input
              type="date"
              id="end-date"
              name="rentalEnd"
              value={booking.rentalEnd}
              onChange={handleInputChange}
            />
          </div>
         
          
          <div className="flex items-center mt-4">
            <label htmlFor="name" className="mr-4">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="Name"
              value={booking.Name}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex items-center mt-4">
            <label htmlFor="email" className="mr-4">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="Email"
              value={booking.Email}
              onChange={handleInputChange}
            />
          </div>
         
         
          <button
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4 hover:bg-blue-700"
            type="submit"
          >
            Book Now
          </button>
        </form>
      </div>
    </Layout>
  );
};
export default CarBooking;
