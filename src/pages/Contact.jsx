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
    <div className="bg-gray-50 min-h-screen mb-5 ">

      {/* HERO */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-20 text-center shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
        <p className="mt-4 text-lg opacity-90">We’d love to hear from you</p>
      </div>

      {/* MAIN SECTION */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">

        {/* FORM */}
        <form 
          onSubmit={handleSubmit} 
          className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-200"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Send Message</h2>

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            required
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            required
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            className="w-full mb-6 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            required
          ></textarea>

          <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 hover:scale-105 transition duration-300 shadow-md">
            Send Message 🚀
          </button>
        </form>

        {/* CONTACT INFO */}
        <div className="flex flex-col justify-center bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Get in Touch</h2>

          <p className="text-gray-600 mb-6">
            Have questions? Our team is available 24/7 to assist you.
          </p>

          <div className="space-y-5 text-gray-700 text-lg">
            <p className="flex items-center gap-3">
              📍 <span>Kalol, Gujarat, India</span>
            </p>
            <p className="flex items-center gap-3">
              📞 <span>+91 9876543210</span>
            </p>
            <p className="flex items-center gap-3">
              📧 <span>support@yourstore.com</span>
            </p>
          </div>
        </div>

      </div>

      {/* MAP */}
      <div className="w-full h-[400px] px-6 pb-16">
        <div className="rounded-2xl overflow-hidden shadow-lg border">
          <iframe
            title="map"
            src="https://maps.google.com/maps?q=kalol%20gujarat&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[400px] border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

    </div>
  )
}

export default Contact