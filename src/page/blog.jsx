import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; // Import Slick CSS files

function Blog() {
  const communityInitiatives = [
    {
      title: "3MTT Taraba Meetup",
      description: "Description of  community initiative.",
      image: "./3mtt.jpeg",
    },

    {
      title: "Build with AI Bauchi",
      description: "Description of community initiative.",
      image: "./bd4.jpg",
    },

    {
      title: "API Day Jalingo",
      description: "Description of community initiative.",
      image: "./Apiday1.jpg",
      link: "/initiative2",
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
          slidesToShow: 1,
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
    <section id="blog" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Community
        </h2>
        <Slider {...settings}> 
          {communityInitiatives.map((initiative, index) => (
            <div key={index} className="">
              <div className="bg-white rounded-lg shadow-md overflow-hidden mx-2">
                <img
                  src={initiative.image}
                  alt={initiative.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{initiative.title}</h3>
                  <p className="text-gray-600">{initiative.description} <a href="#reed" className="text-blue-500">Read more</a></p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Blog;
