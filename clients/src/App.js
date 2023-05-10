import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HotelsHome";

import LoginPage from "./components/LoginForm";
import Signup from "./components/Signup";

import HotelDetails from "./components/HotelDetails";
import Profile from "./components/Profile";

import SearchForm from "./components/flights/SearchFlights";
import FlightList from "./components/flights/FlightList";

import BookingForm from "./components/flights/FlightBookingForm";
import ConfirmationPage from "./components/flights/ConfirmationPage";
import ViewPage from "./components/ViewPage";

import AdminH from "./components/admin/AdminH";
import AdminHotels from "./components/admin/AdminHotels";
import FlightsAdmin from "./components/admin/FlightsAdmin";
import CarsAdmin from "./components/admin/CarsAdmin";
import TrainsAdmin from "./components/admin/TrainsAdmin";

import Trains from "./components/trains/Trains";
import Cars from "./components/cars/Cars";
import Hpackage from "./components/Hpackage/Hpackage";
import CarsBooking from "./components/cars/CarsBooking";
import Agra from "./components/tourPlace/Agra";
import Jaipur from "./components/tourPlace/Jaipur";
import Goa from "./components/tourPlace/Goa";
import Kerala from "./components/tourPlace/Kerala";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ViewPage />} />
        <Route path="/hotels" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/hotels/:id" element={<HotelDetails />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/flights" element={<FlightList />} />
        <Route path="/flights/search" element={<SearchForm />} />
        <Route path="/booking/:flightId" element={<BookingForm />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />

        <Route path="/admin" element={<AdminH />} />
        <Route path="/admin/hotels" element={<AdminHotels />} />
        <Route path="/admin/flights" element={<FlightsAdmin />} />
        <Route path="/admin/cars" element={<CarsAdmin />} />
        <Route path="/admin/trains" element={<TrainsAdmin />} />

        <Route path="/trains" element={<Trains />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/cars/booking" element={<CarsBooking />} />

        <Route path="/holidays" element={<Hpackage />} />

        <Route path="/agra" element={<Agra />} />
        <Route path="/jaipur" element={<Jaipur />} />
        <Route path="/Goa" element={<Goa />} />
        <Route path="/Kerala" element={<Kerala />} />
      </Routes>
    </div>
  );
}

export default App;
