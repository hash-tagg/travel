import React from "react";
import Layout from "../Layout";

const Agra = () => {
  return (
    <Layout>
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Agra</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Agra is a city in northern India’s Uttar Pradesh state. It's home to the
          iconic Taj Mahal, a mausoleum built for the Mughal ruler Shah Jahan’s
          wife, Mumtaz Mahal (who died in childbirth in 1631).
        </p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Best time to visit
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              The best time to visit Agra is between October and March when the
              weather is pleasant and dry.
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Getting there</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              Agra is well connected by road, rail and air. The nearest airport is
              in Delhi (approx. 220 km away) and the nearest railway station is
              Agra Cantt.
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Places to visit</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <ul className="list-disc pl-5">
                <li>Taj Mahal</li>
                <li>Agra Fort</li>
                <li>Fatehpur Sikri</li>
                <li>Itmad-ud-Daula</li>
              </ul>
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Things to do</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <ul className="list-disc pl-5">
                <li>Visit the Taj Mahal at sunrise or sunset</li>
                <li>Explore Agra Fort</li>
                <li>Shop for handicrafts and souvenirs</li>
                <li>Try the local cuisine</li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
   </div>
   </div>
   </Layout>
  );
}

export default Agra;