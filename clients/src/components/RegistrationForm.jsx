import React, { useState } from 'react';
import axios from 'axios';

function RegistrationForm({ setIsLoggedIn }) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('/api/users/register', formData)
      .then((response) => {
        localStorage.setItem('accessToken', response.data.accessToken);
        setIsLoggedIn(true);
      })
      .catch((error) => {
        setFormErrors(error.response.data.errors);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
          Username
        </label>
        <input
          className={`border rounded-lg py-2 px-3 ${formErrors.username ? 'border-red-500' : ''}`}
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
        {formErrors.username && (
          <p className="text-red-500 text-sm mt-1">{formErrors.username.msg}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className={`border rounded-lg py-2 px-3 ${formErrors.email ? 'border-red-500' : ''}`}
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />   
        {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email.msg}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input
          className={`border rounded-lg py-2 px-3 ${formErrors.password ? 'border-red-500' : ''}`}
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        {formErrors.password && (
          <p className="text-red-500 text-sm mt-1">{formErrors.password.msg}</p>
        )}
      </div>
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Register
      </button>
    </form>
  );
}

export default RegistrationForm;
