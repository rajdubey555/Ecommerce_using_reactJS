import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Link } from "react-router-dom";
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

const banners = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&q=80",
    label: "Electronics",
    tag: "Up to 40% Off",
    link: "/category/smartphones"
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80",
    label: "Fashion",
    tag: "New Arrivals",
    link: "/category/womens-dresses"
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
    label: "Furniture",
    tag: "Best Deals",
    link: "/category/furniture"
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&q=80",
    label: "Cameras",
    tag: "Top Rated",
    link: "/category/laptops"
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&q=80",
    label: "Skincare",
    tag: "Trending Now",
    link: "/category/skin-care"
  },
]

const ProductBanner = () => {
  return (
    <div className='px-2 md:px-4 mb-8'>

      {/* Header */}
      <div className='flex items-center gap-2 px-2 md:px-5 mb-2'>
        <h1 className='text-2xl font-bold text-gray-600'>
          Top <span className='text-[var(--primary)]'>Brand Deals</span>
        </h1>
      </div>

      <Swiper
        effect='coverflow'
        grabCursor={true}
        centeredSlides={true}
        initialSlide={2}
        autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        loop={true}
        speed={700}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 120,
          modifier: 1.2,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        breakpoints={{
          0:    { slidesPerView: 1.4 },   // mobile — center card + peek sides
          480:  { slidesPerView: 1.6 },
          640:  { slidesPerView: 2 },
          768:  { slidesPerView: 2.4 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 3 },
        }}
        className="w-full !pb-10 mt-3"
      >
        {banners.map((item) => (
          <SwiperSlide
            key={item.id}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <Link to={item.link} className="block relative group">

              {/* Image */}
              <img
                src={item.img}
                className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                alt={item.label}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                <span className="inline-block bg-[var(--primary)] text-white text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full mb-1">
                  {item.tag}
                </span>
                <h2 className="text-white font-bold text-sm sm:text-base md:text-lg leading-tight">
                  {item.label}
                </h2>
              </div>

            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
}

export default ProductBanner