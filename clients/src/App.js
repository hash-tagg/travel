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



      </Routes>
    </div>
  );
}

export default App;
