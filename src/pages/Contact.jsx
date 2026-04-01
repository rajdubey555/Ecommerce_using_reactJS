import React, { useState } from 'react'

const Contact = () => {

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)

    alert("Message sent successfully!")

    setForm({
      name: '',
      email: '',
      message: ''
    })
  }

  return (
    <div className="bg-gray-50">

      {/* HERO */}
      <div className="bg-linea-to-r from-blue-500 to-indigo-600 text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
        <p className="mt-4">We'd love to hear from you</p>
      </div>

      {/* MAIN SECTION */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">

        {/* FORM */}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold mb-6">Send Message</h2>

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          ></textarea>

          <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700">
            Send Message
          </button>
        </form>

        {/* CONTACT INFO */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

          <p className="text-gray-600 mb-4">
            Have questions? We are here to help you 24/7.
          </p>

          <div className="space-y-4 text-gray-700">
            <p><strong>📍 Address:</strong> Kalol, Gujarat, India</p>
            <p><strong>📞 Phone:</strong> +91 9876543210</p>
            <p><strong>📧 Email:</strong> support@yourstore.com</p>
          </div>
        </div>

      </div>

      {/* MAP */}
      <div className="w-full h-100">
        <iframe
          title="map"
          src="https://maps.google.com/maps?q=kalol%20gujarat&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

    </div>
  )
}

export default Contact