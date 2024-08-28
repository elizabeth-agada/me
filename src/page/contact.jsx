import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

function Contact({ onClose }) {
  const handleClose = () => {
    onClose(); // Invoke onClose function passed from parent
  };

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track if form is submitted

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., send email)
    console.log(formData);

    // Simulate successful submission (you would replace this with your actual submission logic)
    setIsSubmitted(true);
    
    // Clear the form after submission
    setFormData({ name: '', email: '', message: '' });

    // Optionally, hide the success message after a few seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000); // Hide after 5 seconds
  };

  return (
    <section id="contact" className="relative bg-gradient-to-r from-[#1E3A8A] to-[#060229e7] text-white p-8">
      <div className="container mx-auto px-4">
        <button onClick={handleClose} className="absolute top-0 right-0 m-4 text-gray-200 hover:text-white">
          <FaTimes />
        </button>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Get in Touch</h2>

        {isSubmitted && (
          <div className="text-center text-green-500 font-semibold mb-4">
            Message sent successfully!
          </div>
        )}

        <div className="flex flex-col md:flex-row md:space-x-12">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="md:w-2/3 w-full p-8 bg-white rounded-lg shadow-md flex flex-col space-y-6">
            <div className="mb-4">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className=" appearance-none border rounded-sm w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="appearance-none border rounded-sm w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Write a message to me"
                rows="5"
                required
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-[#1E3A8A] to-[#060229e7] hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline"
              >
                Send Message
              </button>
            </div>
          </form>

          <div className="md:w-1/2 flex flex-col justify-center md:items-end mt-12 md:mt-0">
            <h3 className="text-2xl font-bold mb-4">Say Hi!</h3>
            <p className="text-lg">
               <a href="mailto:elizadave6@gmail.com" className="text-blue-400 hover:underline">elizadave6@gmail.com</a>
            </p>
            {/* Additional contact details can go here */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
