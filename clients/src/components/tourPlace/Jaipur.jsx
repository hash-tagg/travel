import React from "react";
import Layout from "../Layout";

const Jaipur = () => {
  return (
    <Layout>
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Jaipur
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Jaipur is the capital city of the Indian state of Rajasthan. Known
              as the "Pink City", it is famous for its vibrant culture, rich
              history, and stunning palaces and forts.
            </p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Best time to visit
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  The best time to visit Jaipur is between October and March
                  when the weather is pleasant and dry.
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Getting there
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  Jaipur is well connected by road, rail and air. The nearest
                  airport is Jaipur International Airport and the nearest
                  railway station is Jaipur Junction.
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Places to visit
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <ul className="list-disc pl-5">
                    <li>Amber Palace</li>
                    <li>City Palace</li>
                    <li>Hawa Mahal</li>
                    <li>Jantar Mantar</li>
                  </ul>
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Things to do
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <ul className="list-disc pl-5">
                    <li>Explore the palaces and forts</li>
                    <li>Take a hot air balloon ride</li>
                    <li>Shop for handicrafts and textiles</li>
                    <li>Attend a traditional Rajasthani dance performance</li>
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Jaipur;
