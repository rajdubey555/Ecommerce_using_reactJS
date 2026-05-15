import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div style={{ background: 'var(--bg)', color: 'var(--text)' }}>

      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-14 md:py-20 text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">About Our Store</h1>
        <p className="mt-4 text-base sm:text-lg max-w-2xl mx-auto opacity-90">
          We provide high-quality products with the best shopping experience.
        </p>
      </div>

      {/* COMPANY STORY */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
        <img
          src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a"
          alt="about"
          className="rounded-2xl shadow-lg w-full"
        />
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--text)' }}>Our Story</h2>
          <p className="leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            We started our journey with a simple mission — to deliver premium
            quality products at affordable prices. Our focus is customer
            satisfaction and trust.
          </p>
          <p className="mt-4" style={{ color: 'var(--text-muted)' }}>
            Today, we serve thousands of happy customers and continue to grow
            every day with innovation and dedication.
          </p>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="py-12 md:py-16" style={{ background: 'var(--bg-secondary)' }}>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-10" style={{ color: 'var(--text)' }}>
          Why Choose Us
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-6">

          <div className="p-6 rounded-xl shadow hover:shadow-lg transition border"
               style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
            <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--text)' }}>🏆 Quality Products</h3>
            <p style={{ color: 'var(--text-muted)' }}>
              We ensure every product meets high-quality standards.
            </p>
          </div>

          <div className="p-6 rounded-xl shadow hover:shadow-lg transition border"
               style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
            <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--text)' }}>🚀 Fast Delivery</h3>
            <p style={{ color: 'var(--text-muted)' }}>
              Quick and reliable delivery across all locations.
            </p>
          </div>

          <div className="p-6 rounded-xl shadow hover:shadow-lg transition border"
               style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
            <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--text)' }}>🎧 24/7 Support</h3>
            <p style={{ color: 'var(--text-muted)' }}>
              Our support team is always ready to help you.
            </p>
          </div>

        </div>
      </div>

      {/* STATS */}
      <div className="bg-indigo-600 text-white py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">10K+</h2>
            <p className="mt-1 opacity-80">Customers</p>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">500+</h2>
            <p className="mt-1 opacity-80">Products</p>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">99%</h2>
            <p className="mt-1 opacity-80">Satisfaction</p>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">24/7</h2>
            <p className="mt-1 opacity-80">Support</p>
          </div>
        </div>
      </div>

      {/* TEAM SECTION */}
      <div className="py-12 md:py-16 px-4" style={{ background: 'var(--bg)' }}>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-10" style={{ color: 'var(--text)' }}>
          Our Team
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-2 sm:px-6">

          <div className="text-center">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Raj"
              className="w-28 h-28 md:w-32 md:h-32 mx-auto rounded-full mb-4 shadow-lg"
            />
            <h3 className="font-semibold text-lg" style={{ color: 'var(--text)' }}>Raj</h3>
            <p style={{ color: 'var(--text-muted)' }}>Founder</p>
          </div>

          <div className="text-center">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Priya"
              className="w-28 h-28 md:w-32 md:h-32 mx-auto rounded-full mb-4 shadow-lg"
            />
            <h3 className="font-semibold text-lg" style={{ color: 'var(--text)' }}>Priya</h3>
            <p style={{ color: 'var(--text-muted)' }}>Designer</p>
          </div>

          <div className="text-center">
            <img
              src="https://randomuser.me/api/portraits/men/55.jpg"
              alt="Aman"
              className="w-28 h-28 md:w-32 md:h-32 mx-auto rounded-full mb-4 shadow-lg"
            />
            <h3 className="font-semibold text-lg" style={{ color: 'var(--text)' }}>Aman</h3>
            <p style={{ color: 'var(--text-muted)' }}>Developer</p>
          </div>

        </div>
      </div>

      {/* CTA */}
      <div className="bg-purple-600 text-white py-12 md:py-16 text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold">Start Shopping Today</h2>
        <p className="mt-4 opacity-90">Explore our latest collections now</p>
        <Link to="/products">
          <button className="mt-6 px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-purple-50 hover:scale-105 transition shadow-md">
            Shop Now
          </button>
        </Link>
      </div>

    </div>
  )
}

export default About