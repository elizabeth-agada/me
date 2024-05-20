// src/page/initiative3.jsx
import React from "react";

function Initiative3() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">API Day Jalingo</h2>

        <img
          src="./Apiday1.jpg"
          alt="API Day Jalingo"
          className="w-full h-96 object-cover mb-8"
        />
        <p className="text-gray-700">
          API Day Jalingo was a focused event designed to promote the understanding and usage of APIs (Application Programming Interfaces) among developers and tech enthusiasts in Jalingo. We offered workshops, presentations, and hands-on coding sessions to explore the power of APIs in building innovative applications.
        </p>

        {/* Add more details, photos, or other content here */}
      </div>
    </section>
  );
}

export default Initiative3;
