"use client";

import { useState } from "react";
import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement form submission (e.g., send data to an API or email service)
    setIsSubmitted(true); // Mock form submission status
    console.log(formData); // You can remove this line after implementation
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
          Get in Touch with Us
        </h1>

        {/* Contact Info Section */}
        <div className="mb-12 text-center">
          <p className="text-lg text-gray-700">
            We're here to help! Whether you have questions or feedback, feel free
            to reach out. We respond promptly and would love to hear from you.
          </p>
          <div className="mt-6 space-y-4">
            <p className="text-lg text-gray-700">
              📍 <strong>Our Office:</strong> 123 Business Road, City, Country
            </p>
            <p className="text-lg text-gray-700">
              📧 <strong>Email:</strong> contact@yourwebsite.com
            </p>
            <p className="text-lg text-gray-700">
              📞 <strong>Phone:</strong> +1 (123) 456-7890
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto space-y-6 p-6 bg-gray-100 rounded-xl shadow-lg"
        >
          <div>
            <label htmlFor="name" className="block text-lg font-semibold text-gray-900">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-semibold text-gray-900">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-semibold text-gray-900">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={6}
              className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition duration-200"
            >
              Send Message
            </button>
          </div>
        </form>

        {isSubmitted && (
          <div className="mt-6 text-center text-green-700">
            <p className="text-xl font-semibold">Your message has been sent successfully!</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
