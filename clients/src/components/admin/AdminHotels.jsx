import { FaPlusCircle, FaTrash, FaPencilAlt } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdminLayout from "./AdminLayout";

import { CloudinaryImage } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";

const AdminHotels = () => {
  const REACT_APP_CLOUDINARY_NAME = "drumlszgh";
  const REACT_APP_CLOUDINARY_API_KEY = "664676824842283";
  const REACT_APP_CLOUDINARY_UPLOAD_PRESET = "ml_default";

  const navigate = useNavigate();
  const [hotels, setHotels] = useState([]);
  const [formState, setFormState] = useState({
    name: "",
    location: "",
    description: "",
    price: "",
    images: [],
  });
  const [formErrors, setFormErrors] = useState({});
  const [selectedHotel, setSelectedHotel] = useState(null);

  const fetchHotels = async () => {
    try {
      const response = await axios.get("/api/hotels");
      console.log(response.data);
      setHotels(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchHotels();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFileInputChange = (event) => {
    setFormState({ ...formState, images: event.target.files });
  };

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", REACT_APP_CLOUDINARY_UPLOAD_PRESET);

    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${REACT_APP_CLOUDINARY_NAME}/image/upload`,
      formData
    );
    return response.data.secure_url;
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const imageUrls = await Promise.all(
        Array.from(formState.images).map(uploadImage)
      );

      const hotelData = {
        name: formState.name,
        location: formState.location,
        description: formState.description,
        price: formState.price,
        images: imageUrls,
      };
      console.log(hotelData);
      if (selectedHotel) {
        await axios.put(`/api/hotels/${selectedHotel._id}`, hotelData);
      } else {
        await axios.post("/api/hotels", hotelData);
      }

      setFormState({
        name: "",
        location: "",
        description: "",
        price: "",
        images: [],
      });

      setSelectedHotel(null);
      fetchHotels();
    } catch (error) {
      console.error(error);

      setFormErrors({ message: error.message });
    }
  };

  const handleHotelDelete = async (hotelId) => {
    try {
      await axios.delete(`/api/hotels/${hotelId}`);
      fetchHotels();
    } catch (error) {
      console.error(error);
    }
  };

  const handleHotelEdit = (hotel) => {
    setSelectedHotel(hotel);
    setFormState({
      name: hotel.name,
      location: hotel.location,
      description: hotel.description,
      price: hotel.price,
      images: [],
    });
  };

  return (
    <AdminLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Hotel Management</h1>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md hover
          :bg-green-600 transition-colors mb-6"
          onClick={() => {
            setSelectedHotel(null);
            setFormState({
              name: "",
              location: "",
              description: "",
              price: "",
              images: [],
            });
          }}
        >
          <FaPlusCircle className="inline-block mr-2" />
          Add Hotel
        </button>
        <form onSubmit={handleFormSubmit}>
          {/* Add form fields and error handling here */}
          {formErrors.message && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
              role="alert"
            >
              <span className="block sm:inline">{formErrors.message}</span>
            </div>
          )}

          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-bold mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleInputChange}
              className="border w-full p-2 rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="location" className="block text-sm font-bold mb-2">
              Location:
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formState.location}
              onChange={handleInputChange}
              className="border w-full p-2 rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-bold mb-2"
            >
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              value={formState.description}
              onChange={handleInputChange}
              className="border w-full p-2 rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="price" className="block text-sm font-bold mb-2">
              Price:
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formState.price}
              onChange={handleInputChange}
              className="border w-full p-2 rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="images" className="block text-sm font-bold mb-2">
              Images:
            </label>
            <input
              type="file"
              id="images"
              name="images"
              multiple
              onChange={handleFileInputChange}
              className="border w-full p-2 rounded-lg"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            {selectedHotel ? "Update Hotel" : "Add Hotel"}
          </button>
        </form>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {hotels.map((hotel) => {
            const myImage = new CloudinaryImage(hotel.images[0], {
              cloudName: REACT_APP_CLOUDINARY_NAME,
            }).resize(fill().width(300));

            return (
              <div key={hotel._id} className="border p-4 rounded shadow">
                <img src={hotel.images[0]} alt={hotel.name}></img>
                <h2 className="text-xl font-semibold">{hotel.name}</h2>
                <p>{hotel.location}</p>
                <p>{hotel.description}</p>
                <p>${hotel.price}</p>
                <div className="mt-4">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors mr-2"
                    onClick={() => handleHotelEdit(hotel)}
                  >
                    <FaPencilAlt className="inline-block mr-2" />
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
                    onClick={() => handleHotelDelete(hotel._id)}
                  >
                    <FaTrash className="inline-block mr-2" />
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminHotels;
