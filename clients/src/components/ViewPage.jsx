import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Layout from "./Layout";
import DestinationCard from "./DestinationCard";
import { ThreeDots } from "react-loader-spinner";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

import img1 from "../images/carousel1.jpg";
import img2 from "../images/carousel2.jpg";
import img3 from "../images/carousel3.jpg";

import feature1 from "../images/feature1.jpg";
import feature2 from "../images/feature2.jpg";
import feature3 from "../images/feature3.jpg";
import feature4 from "../images/feature4.jpg";

const ViewPage = () => {
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoaded = () => {
    setImageLoaded(true);
  };

  const sampleDestinations = [
    {
      title: "Agra",
      image: feature1,
      link: "/agra",
    },
    {
      title: "Jaipur",
      image: feature2,
      link: "/jaipur",
    },
    {
      title: "Goa",
      image: feature3,
      link: "/goa",
    },
    {
      title: "Kerala",
      image: feature4,
      link: "/kerala",
    },
  ];

  const sampleTours = [
    {
      title: "Taj Mahal Tour",
      image: feature2,
      link: "/agra",
    },
    {
      title: "Jaipur City Tour",
      image: feature3,
      link: "/jaipur",
    },
    {
      title: "Goa Beach Tour",
      image: feature4,
      link: "/goa",
    },
    {
      title: "Kerala Backwaters Tour",
      image: feature1,
      link: "/kerala",
    },
  ];

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
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
      <div className="bg-white min-h-screen">
        <div div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <main className="container mx-auto ">
            <Carousel
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
              autoPlay
              infiniteLoop
              className="overflow-hidden"
            >
              <div>
                {!imageLoaded && (
                  <Skeleton
                    width="100%"
                    height={200}
                    style={{ borderRadius: "10px" }}
                  />
                )}
                <img
                  src={img1}
                  alt="carousel-img-1"
                  className="w-full h-[350px] object-cover"
                  onLoad={handleImageLoaded}
                />
                <p className="legend">
                  The Torus Effect: Harnessing the Power of the Donut-Shaped
                  Plasma for Energy Generation"
                </p>
              </div>
              <div>
                <img
                  src={img2}
                  alt="carousel-img-2"
                  className="w-full h-[350px] object-cover"
                />
                <p className="legend">
                  Exploring the Mysteries of the Torus Nebula: A Window into the
                  Birth and Death of Stars
                </p>
              </div>
              <div>
                <img
                  src={img3}
                  alt="carousel-img-3"
                  className="w-full h-[350px] object-cover"
                />
                <p className="legend">
                  The Torus Mindset: How to Cultivate Inner Peace and Resilience
                  in a Chaotic World
                </p>
              </div>
            </Carousel>
            <section className="my-12">
              <div className="max-w-7xl mx-auto ">
                <h2 className="text-2xl font-bold mb-6">
                  Popular Destinations
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {sampleDestinations.map((destination, index) => (
                    <Link to={destination.link} key={index}>
                      <DestinationCard
                        image={destination.image}
                        title={destination.title}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </section>
            <section className="my-12 ">
              <div className="max-w-7xl mx-auto  ">
                <h2 className="text-2xl font-bold mb-6">Featured Tours</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {sampleTours.map((destination, index) => (
                    <Link to={destination.link} key={index}>
                      <DestinationCard
                        image={destination.image}
                        title={destination.title}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </Layout>
  );
};

export default ViewPage;
