import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "./Layout";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm(formData);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
     
      const { username, email, password } = formData;
      try {
        const response = await axios.post("/api/users/register", {
          username,
          email,
          password,
        });
        
        navigate("/login");
        console.log(response.data);
      } catch (error) {
        
        console.error(error.response.data);
      }
    }
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.username) {
      errors.username = { msg: "Username is required" };
    }

    if (!data.email) {
      errors.email = { msg: "Email is required" };
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = { msg: "Email is invalid" };
    }

    if (!data.password) {
      errors.password = { msg: "Password is required" };
    } else if (data.password.length < 6) {
      errors.password = { msg: "Password must be at least 6 characters" };
    }

    if (!data.confirmPassword) {
      errors.confirmPassword = { msg: "Confirm password is required" };
    } else if (data.password !== data.confirmPassword) {
      errors.confirmPassword = { msg: "Passwords do not match" };
    }

    return errors;
  };

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 flex  justify-center py-12 sm:px-4 lg:px-8">
        <motion.div
          className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 max-w-md"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className="text-center text-3xl font-extrabold text-gray-900">
              Sign up for an account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className={`appearance-none rounded relative block w-full px-3 py-2 mt-4 mb-4 border ${
                    formErrors.username ? "border-red-500" : "border-gray-300"
                  } placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleInputChange}
                />

                {formErrors.username && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.username.msg}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className={`appearance-none rounded relative block w-full px-3 py-2 mt-4 mb-4 border ${
                    formErrors.email ? "border-red-500" : "border-gray-300"
                  } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {formErrors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.email.msg}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className={`appearance-none rounded relative block w-full px-3 py-2 mt-4 mb-4 border ${
                    formErrors.password ? "border-red-500" : "border-gray-300"
                  } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                {formErrors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.password.msg}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="confirmPassword" className="sr-only">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="current-password"
                  required
                  className={`appearance-none rounded relative block w-full px-3 py-2 mt-4 mb-4 border ${
                    formErrors.confirmPassword
                      ? "border-red-500"
                      : "border-gray-300"
                  } placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                />
                {formErrors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.confirmPassword.msg}
                  </p>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign Up
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </Layout>
  );
};
export default SignUpPage;
