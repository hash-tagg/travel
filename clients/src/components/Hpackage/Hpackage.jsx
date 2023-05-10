import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import feature1 from "../../images/feature1.jpg";
import feature2 from "../../images/feature2.jpg";
import feature3 from "../../images/feature3.jpg";
import feature4 from "../../images/feature4.jpg";

import { ThreeDots } from "react-loader-spinner";

const HolidayPackages = () => {
  const [loading, setLoading] = useState(true);

  const packages = [
    {
      id: 1,
      title: "Package 1",
      destination: "Jaipur, India",
      duration: "5 days, 4 nights",
      accommodation: "3-star hotel",
      transportation: "Local transportation included",
      meals: "Daily breakfast and dinner",
      activities: [
        "Visit to Amber Fort",
        "City tour",
        "Shopping at local markets",
      ],
      price: "₹25,000",
      rating: "4.2/5",
      image: feature1,
    },
    {
      id: 2,
      title: "Package 2",
      destination: "Kerala, India",
      duration: "8 days, 7 nights",
      accommodation: "4-star resort",
      transportation: "Round-trip flights from Delhi",
      meals: "Daily breakfast buffet, 4-course dinner",
      activities: ["Houseboat tour", "Backwater cruise", "Ayurvedic massage"],
      price: "₹50,000",
      rating: "4.8/5",
      image: feature2,
    },
    {
      id: 3,
      title: "Package 3",
      destination: "Goa, India",
      duration: "6 days, 5 nights",
      accommodation: "Beachside cottage",
      transportation: "Local transportation included",
      meals: "Daily breakfast and dinner",
      activities: ["Beach hopping", "Water sports", "Nightlife"],
      price: "₹35,000",
      rating: "4.5/5",
      image: feature3,
    },
    {
      id: 4,
      title: "Package 4",
      destination: "Agra, India",
      duration: "3 days, 2 nights",
      accommodation: "3-star hotel",
      transportation: "Local transportation included",
      meals: "Daily breakfast",
      activities: [
        "Visit to Taj Mahal",
        "City tour",
        "Shopping at local markets",
      ],
      price: "₹15,000",
      rating: "4.0/5",
      image: feature4,
    },
  ];

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ThreeDots color="#2d3748" height={80} width={80} />
      </div>
    );
  }
  return (
    <Layout>
      <div className="bg-gray-100 ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8">Holiday Packages</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {packages.map((pkg) => (
                <div key={pkg.id} className="bg-white shadow-md rounded p-6">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-48 object-cover mb-4 rounded"
                  />
                  <h2 className="text-xl font-bold mb-2">{pkg.title}</h2>
                  <p className="text-gray-700 mb-2">{pkg.destination}</p>
                  <p className="text-gray-700 mb-2">{pkg.duration}</p>
                  <p className="text-gray-700 mb-2">{pkg.accommodation}</p>
                  <p className="text-gray-700 mb-2">{pkg.transportation}</p>
                  <p className="text-gray-700 mb-2">{pkg.meals}</p>
                  <ul className="list-disc list-inside mb-2">
                    {pkg.activities.map((activity) => (
                      <li key={activity} className="text-gray-700">
                        {activity}
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-700 mb-2">{pkg.price}</p>
                  <p className="text-gray-700 mb-4">{`Rating: ${pkg.rating}`}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HolidayPackages;
