import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminLayout from "./AdminLayout";

const CarsAdmin = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingCar, setEditingCar] = useState(null);
  const [formState, setFormState] = useState({
    make: "",
    model: "",
    year: "",
    color: "",
    category: "",
    seats: "",
    pricePerDay: "",
    imageUrl: "",
    available: true,
    licensePlate: "",
  });

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

  const handleEditClick = (car) => {
    setEditingCar(car);
    setFormState({
      make: car.make,
      model: car.model,
      year: car.year,
      licensePlate: car.licensePlate,
      color: car.color,
      category: car.category,
      seats: car.seats,
      pricePerDay: car.pricePerDay,
      imageUrl: car.imageUrl,
      available: car.available,
    });
  };

  const handleSaveClick = async (event) => {
    event.preventDefault();
    try {
      if (editingCar) {
        await axios.put(`/api/cars/${editingCar.licensePlate}`, formState);
        setEditingCar(null);
      } else {
        console.log(formState);
        await axios.post("/api/cars", formState);
      }
      const response = await axios.get("/api/cars");
      setCars(response.data);
      setFormState({
        make: "",
        model: "",
        year: "",
        licensePlate: "",
        color: "",
        category: "",
        seats: "",
        pricePerDay: "",
        imageUrl: "",
        available: true,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteClick = async (car) => {
    try {
      await axios.delete(`/api/cars/${car.licensePlate}`);
      const response = await axios.get("/api/cars");
      setCars(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AdminLayout>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold my-6">Manage Cars</h1>
        <div className="flex">
          <div className="w-1/3 mr-8">
            <h2 className="text-2xl font-bold mb-2">Add/Edit Car</h2>
            {/* Add/Edit Car Form */}
            <form onSubmit={handleSaveClick}>
              {/* Make */}
              <div className="flex items-center mt-4">
                <label htmlFor="make" className="mr-4">
                  Make:
                </label>
                <input
                  type="text"
                  id="make"
                  className="outline-none border-2 border-gray-300 rounded px-3 py-2 w-full focus:border-blue-500"
                  value={formState.make}
                  onChange={(e) =>
                    setFormState({ ...formState, make: e.target.value })
                  }
                />
              </div>
              {/* Model */}
              <div className="flex items-center mt-4">
                <label htmlFor="model" className="mr-4">
                  Model:
                </label>
                <input
                  type="text"
                  id="model"
                  className="outline-none border-2 border-gray-300 rounded px-3 py-2 w-full focus:border-blue-500"
                  value={formState.model}
                  onChange={(e) =>
                    setFormState({ ...formState, model: e.target.value })
                  }
                />
              </div>

              {/* license Plate */}
              <div className="flex items-center mt-4">
                <label htmlFor="licensePlate" className="mr-4">
                  License Plate:
                </label>
                <input
                  type="text"
                  id="licensePlate"
                  className="outline-none border-2 border-gray-300 rounded px-3 py-2 w-full focus:border-blue-500"
                  value={formState.licensePlate}
                  onChange={(e) =>
                    setFormState({ ...formState, licensePlate: e.target.value })
                  }
                />
              </div>

              {/* Year */}
              <div className="flex items-center mt-4">
                <label htmlFor="year" className="mr-4">
                  Year:
                </label>
                <input
                  type="number"
                  id="year"
                  className="outline-none border-2 border-gray-300 rounded px-3 py-2 w-full focus:border-blue-500"
                  value={formState.year}
                  onChange={(e) =>
                    setFormState({ ...formState, year: e.target.value })
                  }
                />
              </div>

              {/* Color */}
              <div className="flex items-center mt-4">
                <label htmlFor="color" className="mr-4">
                  Color:
                </label>
                <input
                  type="text"
                  id="color"
                  className="outline-none border-2 border-gray-300 rounded px-3 py-2 w-full focus:border-blue-500"
                  value={formState.color}
                  onChange={(e) =>
                    setFormState({ ...formState, color: e.target.value })
                  }
                />
              </div>

              {/* Category */}
              <div className="flex items-center mt-4">
                <label htmlFor="category" className="mr-4">
                  Category:
                </label>
                <select
                  id="category"
                  className="outline-none border-2 border-gray-300 rounded px-3 py-2 w-full focus:border-blue-500"
                  value={formState.category}
                  onChange={(e) =>
                    setFormState({ ...formState, category: e.target.value })
                  }
                >
                  <option value="Economy">Economy</option>
                  <option value="Compact">Compact</option>
                  <option value="Midsize">Midsize</option>
                  <option value="Fullsize">Fullsize</option>
                  <option value="SUV">SUV</option>
                  <option value="Luxury">Luxury</option>
                  <option value="Convertible">Convertible</option>
                </select>
              </div>

              {/* Seats */}
              <div className="flex items-center mt-4">
                <label htmlFor="seats" className="mr-4">
                  Seats:
                </label>
                <input
                  type="number"
                  id="seats"
                  className="outline-none border-2 border-gray-300 rounded px-3 py-2 w-full focus:border-blue-500"
                  value={formState.seats}
                  onChange={(e) =>
                    setFormState({ ...formState, seats: e.target.value })
                  }
                />
              </div>

              {/* Price per day */}
              <div className="flex items-center mt-4">
                <label htmlFor="pricePerDay" className="mr-4">
                  Price per day:
                </label>
                <input
                  type="number"
                  id="pricePerDay"
                  className="outline-none border-2 border-gray-300 rounded px-3 py-2 w-full focus:border-blue-500"
                  value={formState.pricePerDay}
                  onChange={(e) =>
                    setFormState({ ...formState, pricePerDay: e.target.value })
                  }
                />
              </div>

              {/* Image URL */}
              <div className="flex items-center mt-4">
                <label htmlFor="imageUrl" className="mr-4">
                  Image URL:
                </label>
                <input
                  type="text"
                  id="imageUrl"
                  className="outline-none border-2 border-gray-300 rounded px-3 py-2 w-full focus:border-blue-500"
                  value={formState.imageUrl}
                  onChange={(e) =>
                    setFormState({ ...formState, imageUrl: e.target.value })
                  }
                />
              </div>
              {/* Available */}
              <div className="flex items-center mt-4">
                <label htmlFor="available" className="mr-4">
                  Available:
                </label>
                <input
                  type="checkbox"
                  id="available"
                  className="outline-none border-2 border-gray-300 rounded px-3 py-2 w-full focus:border-blue-500"
                  checked={formState.available}
                  onChange={(e) =>
                    setFormState({ ...formState, available: e.target.checked })
                  }
                />
              </div>

              {/* Buttons */}
              <div className="mt-4">
                <button
                  className="bg-blue-500 text-white font-bold py-2 px-4 rounded mr-4 hover:bg-blue-700"
                  onClick={handleSaveClick}
                >
                  {editingCar ? "Save" : "Add"}
                </button>
                {editingCar && (
                  <button
                    className="bg-gray-500 text-white font-bold py-2 px-4 rounded hover:bg-gray-700"
                    onClick={() => setEditingCar(null)}
                  >
                    Cancel
                  </button>
                )}
              </div>

              {/* ... */}
            </form>
          </div>
          <div className="w-2/3">
            <h2 className="text-2xl font-bold mb-2">Cars</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {cars.map((car) => (
                <div
                  key={car.licensePlate}
                  className="bg-white shadow-lg rounded-lg overflow-hidden p-4"
                >
                  {/* Car details */}
                  <img
                    className="w-full h-56 object-cover mb-4"
                    src={car.imageUrl}
                    alt={`${car.make} ${car.model}`}
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

                  {/* Edit/Delete buttons */}
                  <div className="flex mt-4">
                    <button
                      className="bg-blue-500 text-white font-bold py-2 px-4 rounded mr-4 hover:bg-blue-700"
                      onClick={() => handleEditClick(car)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700"
                      onClick={() => handleDeleteClick(car)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};
export default CarsAdmin;
