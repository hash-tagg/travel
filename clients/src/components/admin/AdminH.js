import { Link } from "react-router-dom";
import AdminLayout from "./AdminLayout";

const AdminHome = () => {
  return (
    <AdminLayout>
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
          <p className="text-lg">
            Welcome to the Travel Adviser admin dashboard! Use the links above
            to manage hotels, flights, and users.
          </p>
        </div>
      </main>
    </AdminLayout>
  );
};

export default AdminHome;
