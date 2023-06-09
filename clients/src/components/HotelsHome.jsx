import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "./Layout";
import HotelCard from "./HotelCard";
import {ThreeDots} from "react-loader-spinner";

function Search() {
 
  const [query, setQuery] = useState("");
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/api/hotels")
      .then((response) => {
        console.log(response.data);
        setHotels(response.data);
        setLoading(false);
      }) 
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {hotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Search;
