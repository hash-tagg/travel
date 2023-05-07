import React from "react";
import Layout from "../Layout";
import feature1 from "../../images/feature1.jpg";
import feature2 from "../../images/feature2.jpg";
import feature3 from "../../images/feature3.jpg";
import feature4 from "../../images/feature4.jpg";

const HolidayPackages = () => {
  const packages = [
    {
      id: 1,
      title: "Package 1",
      destination: "Hawaii",
      duration: "7 days, 6 nights",
      accommodation: "4-star beach resort",
      transportation: "Round-trip flights from New York City",
      meals: "Daily breakfast buffet",
      activities: ["Surfing lessons", "Island tour", "Snorkeling excursion"],
      price: "$2,500",
      rating: "4.5/5",
      image: feature1,
    },
    {
      id: 2,
      title: "Package 2",
      destination: "Italy",
      duration: "10 days, 9 nights",
      accommodation: "Luxury villa in Tuscany",
      transportation: "Round-trip flights from Los Angeles",
      meals: "Daily breakfast, 4-course dinner with wine",
      activities: ["Wine tasting", "Cooking class", "Day trip to Florence"],
      price: "$5,000",
      rating: "5/5",
      image: feature2,
    },
    {
      id: 3,
      title: "Package 3",
      destination: "Japan",
      duration: "14 days, 13 nights",
      accommodation: "4-star hotels in Tokyo, Kyoto, and Osaka",
      transportation: "Round-trip flights from San Francisco",
      meals: "Daily breakfast buffet",
      activities: ["Sushi-making class", "Tea ceremony", "Guided tour of historic sites"],
      price: "$7,500",
      rating: "4.8/5",
      image: feature3,
    },
    {
      id: 4,
      title: "Package 4",
      destination: "Mexico",
      duration: "5 days, 4 nights",
      accommodation: "All-inclusive resort in Cancun",
      transportation: "Round-trip flights from Miami",
      meals: "All meals and drinks included",
      activities: ["Beach volleyball", "Jet skiing", "Nightly entertainment"],
      price: "$1,500",
      rating: "4.2/5",
      image: feature4,
    },
  ];

  return (
    <Layout>
      <div className="bg-gray-100 py-8">
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
                <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HolidayPackages;

