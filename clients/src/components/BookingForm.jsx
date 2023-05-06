import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookingForm = ({ hotel }) => {
  console.log(hotel);
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [numGuests, setNumGuests] = useState('');

  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bookingData = {
      guestName,
      guestEmail,
      checkInDate,
      checkOutDate,
      numGuests,
      hotel,
      user: user.id,
    };
    console.log('Booking data:', bookingData);

    try {
      const response = await axios.post('/api/bookings', bookingData);

      if (response.status === 201) {
        console.log('Booking successful:', response.data);
        // Handle successful booking, e.g. show a success message or redirect
      }
    } catch (err) {
      console.error('Error submitting booking:', err.message);
      // Handle error, e.g. show an error message or alert
    }
  };

  if (!user) {
    return (
      <div className="text-center text-red-600">
        <p>Please log in to make a booking.</p>
      </div>
    );
  }


  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg">
      <div className="mb-4">
        <label htmlFor="guestName" className="block text-gray-700 font-bold mb-2">
          Guest Name
        </label>
        <input
          type="text"
          id="guestName"
          value={guestName}
          onChange={(e) => setGuestName(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="guestEmail" className="block text-gray-700 font-bold mb-2">
          Guest Email
        </label>
        <input
          type="email"
          id="guestEmail"
          value={guestEmail}
          onChange={(e) => setGuestEmail(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="checkInDate" className="block text-gray-700 font-bold mb-2">
          Check-in Date
        </label>
        <input
          type="date"
          id="checkInDate"
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="checkOutDate" className="block text-gray-700 font-bold mb-2">
          Check-out Date
        </label>
        <input
          type="date"
          id="checkOutDate"
          value={checkOutDate}
          onChange={(e) => setCheckOutDate(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:
          focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="numGuests" className="block text-gray-700 font-bold mb-2">
          Number of Guests
        </label>
        <input
          type="number"
          id="numGuests"
          value={numGuests}
          onChange={(e) => setNumGuests(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          min="1"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit Booking
      </button>
    </form>
  );
};

export default BookingForm;
