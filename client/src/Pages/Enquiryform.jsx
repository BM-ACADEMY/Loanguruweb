import React, { useState } from "react";

export default function WhatsAppForm({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `
      Name: ${form.name}
      Phone: ${form.phone}
      Address: ${form.address}
      Message: ${form.message}
    `;
    const encodedMessage = encodeURIComponent(whatsappMessage);
const whatsappURL = `https://wa.me/919566673272?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md">
      <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md relative">
        {/* Close button */}
        <button
          className="absolute top-3 right-3 text-gray-700 hover:text-gray-900 text-xl font-bold"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">
          Book a Free Consultation
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-gray-700 mb-1">Address</label>
            <input
              type="text"
              name="address"
              placeholder="Enter your address"
              value={form.address}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 mb-1">Message</label>
            <textarea
              name="message"
              placeholder="Write your message"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-md shadow-md transition-colors"
          >
            Send via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}
