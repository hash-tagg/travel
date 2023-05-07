import React from "react";
import Layout from "../Layout";

function Trains() {
  return (
    <Layout>
    <div className="bg-gray-100">
      {/* Hero section */}
      <section className="bg-gray-800 py-32">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-white mb-8">
            Find your perfect train journey
          </h1>
          <form className="max-w-sm mx-auto">
            <div className="flex items-center mb-4">
              <label htmlFor="from" className="mr-4 text-white">
                From:
              </label>
              <input
                type="text"
                id="from"
                className="bg-gray-200 py-2 px-4 rounded-full w-full"
              />
            </div>
            <div className="flex items-center mb-4">
              <label htmlFor="to" className="mr-4 text-white">
                To:
              </label>
              <input
                type="text"
                id="to"
                className="bg-gray-200 py-2 px-4 rounded-full w-full"
              />
            </div>
            <div className="flex justify-center">
              <button className="bg-blue-500 text-white py-2 px-8 rounded-full hover:bg-blue-600">
                Search
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
    </Layout>
  );
}

export default Trains;
