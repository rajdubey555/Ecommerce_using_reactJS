import React from 'react'

const About = () => {
  return (
    <div className="bg-gray-50">

      {/* HERO SECTION */}
      <div className="bg-linear-to-r from-indigo-500 to-purple-600 text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">About Our Store</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          We provide high-quality products with the best shopping experience.
        </p>
      </div>

      {/* COMPANY STORY */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <img 
          src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a"
          alt="about"
          className="rounded-2xl shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            We started our journey with a simple mission — to deliver premium 
            quality products at affordable prices. Our focus is customer 
            satisfaction and trust.
          </p>
          <p className="text-gray-600 mt-4">
            Today, we serve thousands of happy customers and continue to grow 
            every day with innovation and dedication.
          </p>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="bg-white py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          
          <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
            <p className="text-gray-600">
              We ensure every product meets high-quality standards.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">
              Quick and reliable delivery across all locations.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">
              Our support team is always ready to help you.
            </p>
          </div>

        </div>
      </div>

      {/* STATS */}
      <div className="bg-indigo-600 text-white py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          <div>
            <h2 className="text-3xl font-bold">10K+</h2>
            <p>Customers</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">500+</h2>
            <p>Products</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">99%</h2>
            <p>Satisfaction</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">24/7</h2>
            <p>Support</p>
          </div>
        </div>
      </div>

      {/* TEAM SECTION */}
      <div className="py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">Our Team</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">

          <div className="text-center">
            <img 
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="team"
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="font-semibold text-lg">Raj</h3>
            <p className="text-gray-500">Founder</p>
          </div>

          <div className="text-center">
            <img 
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="team"
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="font-semibold text-lg">Priya</h3>
            <p className="text-gray-500">Designer</p>
          </div>

          <div className="text-center">
            <img 
              src="https://randomuser.me/api/portraits/men/55.jpg"
              alt="team"
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="font-semibold text-lg">Aman</h3>
            <p className="text-gray-500">Developer</p>
          </div>

        </div>
      </div>

      {/* CTA */}
      <div className="bg-purple-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold">Start Shopping Today</h2>
        <p className="mt-4">Explore our latest collections now</p>
        <button className="mt-6 px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-200">
          Shop Now
        </button>
      </div>

    </div>
  )
}

export default About