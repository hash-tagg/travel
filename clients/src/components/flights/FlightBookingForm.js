import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import Layout from "../Layout";
import ConfirmationPage from "./ConfirmationPage";

const BookingForm = () => {
  const { flightId } = useParams();
  const location = useLocation();
  const flightPrice = location.state.flightPrice;
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?.id;

  const [bookingInfo, setBookingInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNo: "",
    address: "",
    flightId,
    passengers: 1,
    totalPrice: flightPrice,
    userId,
  });

  useEffect(() => {
    setBookingInfo((prevState) => ({
      ...prevState,
      totalPrice: flightPrice * prevState.passengers,
    }));
  }, [bookingInfo.passengers]);

  const [isBookingSuccessful, setIsBookingSuccessful] = useState(false);

  const handleChange = (event) => {
    setBookingInfo({
      ...bookingInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const {
        firstName,
        lastName,
        email,
        mobileNo,
        address,
        passengers,
        totalPrice,
      } = bookingInfo;

      const response = await axios.post("/api/flight/bookings", {
        flightId,
        firstName,
        lastName,
        email,
        mobileNo,
        address,
        passengers,
        totalPrice,
        userId,
      });
      alert("Success");
      console.log(response.data);

      setIsBookingSuccessful(true);
    } catch (error) {
      console.error(error);
    }
  };

  if (isBookingSuccessful) {
    return <ConfirmationPage bookingInfo={bookingInfo} />;
  }

  return (
    <Layout>
      <div className="max-w-lg mx-auto mt-8">
        <h1 className="text-2xl font-bold mb-4">Book your flight</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstName"
              name="firstName"
              type="text"
              value={bookingInfo.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastName"
              name="lastName"
              type="text"
              value={bookingInfo.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              value={bookingInfo.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="mobileNo"
            >
              Mobile No.
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="mobileNo"
              name="mobileNo"
              type="tel"
              value={bookingInfo.mobileNo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="address"
            >
              Address
            </label>
            <textarea
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              name="address"
              value={bookingInfo.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="passengers"
            >
              Passengers
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="passengers"
              name="passengers"
              type="number"
              min="1"
              max="10"
              value={bookingInfo.passengers}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="totalPrice"
            >
              Total Price
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="totalPrice"
              name="totalPrice"
              type="number"
              value={bookingInfo.totalPrice}
              onChange={handleChange}
              disabled
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="flightId"
            >
              Flight ID
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="flightId"
              name="flightId"
              type="text"
              value={bookingInfo.flightId}
              onChange={handleChange}
              disabled
            />
          </div>
          <div className="flex items-center justify-between mb-20 w-full bg-white">
            <button
              className="bg-blue-500 hover:bg-blue-700 w-full  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Book now
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default BookingForm;
