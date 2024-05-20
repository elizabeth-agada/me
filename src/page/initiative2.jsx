// src/page/initiative2.jsx (or your preferred path)
import React from "react";

function Initiative2() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Build with AI Bauchi</h2>

        {/* Add more details, photos, or other content here */}
        <img
          src="./bd4.jpg" 
          alt="Build with AI Bauchi"
          className="w-full h-96 object-cover mb-8"
        />
        <p className="text-gray-700">
          This community initiative focused on empowering individuals with knowledge and skills in artificial intelligence.
          We organized workshops and hackathons to encourage innovation in AI within the Bauchi community.
        </p>
      </div>
    </section>
  );
}

export default Initiative2;
