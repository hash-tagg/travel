import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CarsBooking from "./CarsBooking";
import Layout from "../Layout";
import {ThreeDots} from "react-loader-spinner";

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCar, setSelectedCar] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get("/api/cars");
        setCars(response.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  const handleBookNow = (car) => {
    navigate("/cars/booking", { state: { car } });
  };
  

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ThreeDots  color="#2d3748" height={80} width={80} />
      </div>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <h1 className="text-4xl font-bold my-6">Cars</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cars.map((car) => (
            <div
              key={car.licensePlate}
              className="bg-white shadow-lg rounded-lg overflow-hidden p-4"
            >
              <img
                className="w-full h-56 object-cover mb-4"
                src={car.imageUrl}
                alt={car.make + " " + car.model}
              />
              <h2 className="text-2xl font-bold mb-2">
                {car.make} {car.model}
              </h2>
              <p>Year: {car.year}</p>
              <p>License Plate: {car.licensePlate}</p>
              <p>Color: {car.color}</p>
              <p>Category: {car.category}</p>
              <p>Seats: {car.seats}</p>
              <p>Price per day: ${car.pricePerDay}</p>
              <p>Available: {car.available ? "Yes" : "No"}</p>
              <button
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4 hover:bg-blue-700"
                onClick={() => handleBookNow(car)}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
        {selectedCar && <CarsBooking car={selectedCar} />}
      </div>
      </div>
    </Layout>
  );
};

export default Cars;
