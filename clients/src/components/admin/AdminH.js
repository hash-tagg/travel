import { Link } from "react-router-dom";
import Layout from "../Layout";

const AdminHome = () => {
  return (
    <Layout>
      <div className="flex flex-col min-h-screen">
        <nav className="bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="text-white">
                  <h1 className="font-bold text-xl">Travel Adviser</h1>
                </Link>
              </div>
              <div className="flex items-center">
                <Link
                  to="/admin/hotels"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Manage Hotels
                </Link>
                <Link
                  to="/admin/flights"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Manage Flights
                </Link>
                <Link
                  to="/admin/users"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Manage Users
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <main className="flex-grow">
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
            <p className="text-lg">
              Welcome to the Travel Adviser admin dashboard! Use the links above
              to manage hotels, flights, and users.
            </p>
          </div>
        </main>
        <footer className="bg-gray-800">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <p className="text-white">
                © 2023 Travel Adviser. All rights reserved.
              </p>
              <div className="flex items-center">
                <Link
                  to="/about"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Layout>
  );
};

export default AdminHome;
