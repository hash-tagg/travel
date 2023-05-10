import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BookingForm from "./BookingForm";
import Layout from "./Layout";


function HotelDetails() {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState('');

  // Fetch hotel data when the component mounts
  useEffect(() => {
    setLoading(true);
    axios
      .get(`/api/hotels/${id}`)
      .then((response) => {
        setHotel(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  // Get user ID from localStorage when the component mounts
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!hotel) {
    return <p>Hotel not found.</p>;
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2 mb-4">
        <h1 className="text-4xl font-bold mb-4">{hotel.name}</h1>
        <img
          className="w-full rounded-lg shadow-md mb-8"
          src={hotel.images[0]}
          alt={hotel.name}
        />
        <div className="flex justify-between mb-4">
          <div>
            <p className="text-lg font-bold">{hotel.location}</p>
            <p className="text-gray-600">{hotel.description}</p>
          </div>
          <div>
            <p className="text-3xl font-bold">₹{hotel.price}</p>
            <p className="text-gray-600">per night</p>
          </div>
        </div>
        {user && <BookingForm hotel={id} user={user} />}
      </div>
    </Layout>
  );
}

export default HotelDetails;
