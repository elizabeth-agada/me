import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

function Contact({ onClose }) {
  const handleClose = () => {
    onClose(); // Invoke onClose function passed from parent
  };

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., send email)
    console.log(formData);
    setFormData({ name: '', email: '', message: '' }); // Clear the form after submission
  };

  return (
    <section id="contact" className="relative bg-gradient-to-r from-[#1E3A8A] to-[#060229e7]  text-white md:px-56 p-6">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">Get in Touch</h2>
        <button onClick={handleClose} className="absolute top-0 right-0 m-4 text-gray-200 hover:text-white">
          <FaTimes />
        </button>

        <div className="flex flex-col md:flex-row md:justify-between">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="md:w-1/2 mb-8 md:mb-0 px-20 p-8 bg-white rounded-lg shadow-md">
            <div className="mb-4 ">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Name"
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Message"
                rows="5"
              ></textarea>
            </div>

            <div className="flex items-center justify-center"> {/* Center the button */}
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Send Message
              </button>
            </div>
          </form>

          <div className="md:w-1/2 md:text-right">
            <h3 className="text-xl font-bold mb-2">Contact Information</h3>
            <p className="text-white">
              Email: <a href="mailto:your.email@example.com" className="text-blue-500 hover:underline">elizadave6@gmail.com</a>
            </p>
            <p className="text-gray-600">
              {/* You can add other contact details like phone number or social media links here */}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
