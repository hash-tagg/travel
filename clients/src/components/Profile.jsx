import React, { useEffect, useState } from "react";
import axios from "axios";
import BookingCard from "./BookingCard";
import FlightBookingCard from "./FlightBookingCard";
import CarBookingCard from "./CarBookingCard";
import Layout from "./Layout";
import { ThreeDots } from "react-loader-spinner";

function Profile() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const [bookings, setBookings] = useState([]);
  const [flightBooking, setFlightBooking] = useState([]);
  const [carBookings, setCarBookings] = useState([]);


  useEffect(() => {
    const fetchBookings = async (userId) => {
      try {
        const response = await axios.get(`/api/bookings?userId=${userId}`);
        setBookings(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching bookings:", error);
      }
    };
  
    const fetchflight = async (userId) => {
      try {
        const response = await axios.get(`/api/flight/bookings?userId=${userId}`);
        setFlightBooking(response.data.data);
      } catch (error) {
        console.error("Error fetching flight bookings:", error);
      }
    };
  
    const fetchCarBookings = async (userId) => {
      try {
        const response = await axios.get(`/api/carBookings?userId=${userId}`);
        setCarBookings(response.data);
      } catch (error) {
        console.error("Error fetching car bookings:", error);
      }
    };
  
    const userData = JSON.parse(localStorage.getItem("user"));
  
    if (userData && userData.id) {
      setUser(userData);
      fetchBookings(userData.id);
      fetchflight(userData.id);
      fetchCarBookings(userData.id);
      console.log(userData.id);
    }
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ThreeDots  color="#2d3748" height={80} width={80} />
      </div>
    );
  }


  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
              <div className="mt-6 space-y-6">
                <div className="bg-white shadow  sm:rounded-lg">
                  <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Personal Information
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      Basic user information.
                    </p>
                  </div>
                  <div className="border-t border-gray-200">
                    <dl>
                      <div className="px-4 py-5 grid grid-cols-3 gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          Username
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 col-span-2">
                          {user.username}
                        </dd>
                      </div>
                      <div className="px-4 py-5 grid grid-cols-3 gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          Email address
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 col-span-2">
                          {user.email}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>

                <div className="bg-white shadow  sm:rounded-lg">
                  <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Bookings
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      A list of all your bookings.
                    </p>
                  </div>
                  <div className="border-t border-gray-200">
                    {bookings?.map((booking) => (
                      <BookingCard key={booking._id} booking={booking} />
                    ))}
                  </div>
                </div>

                <div className="bg-white shadow  sm:rounded-lg">
                  <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Flight Bookings
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      A list of all your flight bookings.
                    </p>
                  </div>
                  <div className="border-t border-gray-200">
                    {flightBooking?.map((flight) => (
                      <FlightBookingCard key={flight._id} booking={flight} />
                    ))}
                  </div>
                </div>

                <div className="bg-white shadow  sm:rounded-lg">
                  <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Car Bookings
                    </h3>

                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      A list of all your car bookings.
                    </p>

                    <div className="border-t border-gray-200">
                    {carBookings?.map((car) => (
                        <CarBookingCard key={car._id} booking={car} />
                        ))}
                        </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Profile;
