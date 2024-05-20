// src/components/Initiative1.jsx (or similar path)
import React from "react";

function Initiative1() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">3MTT Taraba Meetup</h2>
        {/* Add detailed information about the initiative here */}
        <img
          src="./3mtt.jpeg" // Make sure the path is correct
          alt="3MTT Taraba Meetup"
          className="w-full h-96 object-cover mb-8" // Make the image responsive
        />
        <p className="text-gray-700">
          This was a great initiative that brought together tech enthusiasts in Taraba State.
          We had talks, workshops, and networking opportunities. It was a huge success!
        </p>
        {/* Add more details, photos, testimonials, etc. */}
      </div>
    </section>
  );
}

export default Initiative1;
