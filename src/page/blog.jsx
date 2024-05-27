import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; // Import Slick CSS files
import { FaTimes } from 'react-icons/fa';

function Blog({ onClose }) {
  const handleClose = () => {
    onClose(); // Invoke onClose function passed from parent
  };

  const communityInitiatives = [
    {
      title: "3MTT Taraba Meetup",
      description: "This was a great initiative that brought together tech enthusiasts in Taraba State. We had talks, workshops",
      image: "./3mtt.jpeg",
      link: "/initiative1",
    },

    {
      title: "Build with AI Bauchi",
      description: "This community initiative focused on empowering individuals with knowledge and skills in artificial intelligence.",
      image: "./bd4.jpg",
      link: "/initiative2",
    },

    {
      title: "API Day Jalingo",
      description: "API Day Jalingo was a focused event designed to promote the understanding and usage of APIs.",
      image: "./Apiday1.jpg",
      link: "/initiative3",
    },
    
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,    // Enable center mode
    centerPadding: '50px', // Adjust padding as needed
    responsive: [ // Add responsive settings
    
      {
        breakpoint: 1024, // Adjust breakpoint for smaller screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // Adjust breakpoint for mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="blog" className="p-6 md:p-24 bg-gray-900 relative overflow-hidden">
      {/* Close icon */}
      <button onClick={handleClose} className="absolute top-0 right-0 m-4 text-gray-200 hover:text-white">
        <FaTimes />
      </button>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl text-white font-bold text-center mb-8">
          Community
        </h2>
        <Slider {...settings}>
          {communityInitiatives.map((initiative, index) => (
            <div key={index} className="">
              <a href={initiative.link} className="block"> {/* Wrap the entire card content in an anchor tag */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden mx-2">
                  <img
                    src={initiative.image}
                    alt={initiative.title}
                    className="w-full h-12 md:h-48 object-cover"
                  />
                  <div className="text-left">
                    <h3 className="md:text-xl font-bold mb-2">{initiative.title}</h3>
                    <p className="sm:text-sm text-gray-600">
                      {initiative.description} <span className="text-blue-500">Read more</span> {/* Use a span for styling the "Read more" link */}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Blog;
