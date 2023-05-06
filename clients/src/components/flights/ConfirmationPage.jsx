import React from 'react';
import Layout from '../Layout';

const ConfirmationPage = ({ bookingInfo }) => {
  const {
    firstName,
    lastName,
    email,
    mobileNo,
    address,
    flightId,
    passengers,
    totalPrice,
  } = bookingInfo;

  return (
    <Layout>
      <div className="max-w-lg mx-auto my-8 p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Booking Confirmation</h1>
        <p className="text-xl mb-4">
          Thank you for booking with us, {firstName} {lastName}!
        </p>
        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2">Booking Details:</h2>
          <p className="text-gray-700">
            Flight ID: {flightId}
          </p>
          <p className="text-gray-700">
            Passengers: {passengers}
          </p>
          <p className="text-gray-700">
            Total Price: {totalPrice}
          </p>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-2">Contact Information:</h2>
          <p className="text-gray-700">{firstName} {lastName}</p>
          <p className="text-gray-700">{email}</p>
          <p className="text-gray-700">{mobileNo}</p>
          <p className="text-gray-700">{address}</p>
        </div>
      </div>
    </Layout>
  );
};

export default ConfirmationPage;
