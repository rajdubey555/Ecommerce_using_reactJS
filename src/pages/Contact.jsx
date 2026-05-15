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
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <div style={{ background: 'var(--bg)', color: 'var(--text)' }} className="min-h-screen mb-5">

      {/* HERO */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-16 md:py-20 text-center shadow-lg px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Contact Us</h1>
        <p className="mt-4 text-base sm:text-lg opacity-90">We'd love to hear from you</p>
      </div>

      {/* MAIN SECTION */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="p-6 sm:p-8 rounded-2xl shadow-xl border"
          style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-6" style={{ color: 'var(--text)' }}>Send Message</h2>

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full mb-4 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition border"
            style={{
              background: 'var(--input-bg)',
              color: 'var(--text)',
              borderColor: 'var(--input-border)'
            }}
            required
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full mb-4 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition border"
            style={{
              background: 'var(--input-bg)',
              color: 'var(--text)',
              borderColor: 'var(--input-border)'
            }}
            required
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            className="w-full mb-6 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition border"
            style={{
              background: 'var(--input-bg)',
              color: 'var(--text)',
              borderColor: 'var(--input-border)'
            }}
            required
          ></textarea>

          <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 hover:scale-105 transition duration-300 shadow-md">
            Send Message 🚀
          </button>
        </form>

        {/* CONTACT INFO */}
        <div className="flex flex-col justify-center p-6 sm:p-8 rounded-2xl shadow-xl border"
             style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
          <h2 className="text-xl sm:text-2xl font-bold mb-6" style={{ color: 'var(--text)' }}>Get in Touch</h2>

          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            Have questions? Our team is available 24/7 to assist you.
          </p>

          <div className="space-y-5 text-lg" style={{ color: 'var(--text-muted)' }}>
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
      <div className="w-full px-4 sm:px-6 pb-12 md:pb-16">
        <div className="rounded-2xl overflow-hidden shadow-lg border" style={{ borderColor: 'var(--border)' }}>
          <iframe
            title="map"
            src="https://maps.google.com/maps?q=kalol%20gujarat&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full border-0"
            style={{ height: '350px' }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

    </div>
  )
}

export default Contact