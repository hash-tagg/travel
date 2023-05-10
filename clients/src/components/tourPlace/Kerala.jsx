import React from "react";
import Layout from "../Layout";

const Kerala = () => {
  return (
    <Layout>
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Kerala
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Kerala is a state located in southern India, known for its scenic
              backwaters, lush greenery, and traditional Ayurvedic treatments.
            </p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Best time to visit
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  The best time to visit Kerala is from September to March when
                  the weather is pleasant and dry.
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Getting there
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  Kerala is well connected by road, rail and air. The nearest
                  airport is Cochin International Airport and the nearest
                  railway station is Ernakulam Junction.
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Places to visit
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <ul className="list-disc pl-5">
                    <li>Alleppey Backwaters</li>
                    <li>Munnar Hill Station</li>
                    <li>Kochi Fort</li>
                    <li>Wayanad Wildlife Sanctuary</li>
                  </ul>
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Things to do
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <ul className="list-disc pl-5">
                    <li>Take a houseboat ride on the backwaters</li>
                    <li>Visit tea and spice plantations</li>
                    <li>Experience Ayurvedic treatments and massages</li>
                    <li>Try local seafood delicacies</li>
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

export default Kerala;
