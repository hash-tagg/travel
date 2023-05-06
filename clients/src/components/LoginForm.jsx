import React, { useState } from "react";
import axios from "axios";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";

const containerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

axios.defaults.baseURL = "http://localhost:5000";

function LoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/api/users/login", formData)
      .then((response) => {
        if (response && response.data) {
          console.log(response.data);
          const { token, user } = response.data;
          if (user) {
            localStorage.setItem("user", JSON.stringify(user));
          }
          localStorage.setItem("token", token);
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="w-full max-w-md bg-white p-8 rounded-lg shadow-md"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-center text-2xl font-bold mb-6">Log In</h2>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col justify-center items-center h-full">
              <div className="mb-4 w-full">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className={`border rounded-lg py-2 px-3 ${
                    formErrors.email ? "border-red-500" : ""
                  } w-full`}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {formErrors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.email.msg}
                  </p>
                )}
              </div>
              <div className="mb-4 w-full">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className={`border rounded-lg py-2 px-3 ${
                    formErrors.password ? "border-red-500" : ""
                  } w-full`}
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                {formErrors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.password.msg}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
              >
                Log In
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </Layout>
  );
}

export default LoginForm;
