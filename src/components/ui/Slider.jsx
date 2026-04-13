import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import banner2 from '../../assets/banner2.jpg'
import banner3 from '../../assets/banner3.jpg'
import img1 from '../../assets/8852975.jpg'

const slides = [
    {
        image: img1,
        title: 'Mega Sale is Live!',
        subtitle: 'Up to 70% off on top brands',
        cta: 'Shop Now',
        align: 'left',
    },
    {
        image: banner2,
        title: 'New Arrivals Every Day',
        subtitle: 'Discover the latest trends in fashion & tech',
        cta: 'Explore',
        align: 'center',
    },
    {
        image: banner3,
        title: 'Best Deals of the Week',
        subtitle: 'Limited time offers — grab them before they\'re gone!',
        cta: 'View Deals',
        align: 'right',
    },
]

const Slider = () => {
    return (
        <div className="relative w-full mt-2 md:mt-4 overflow-hidden">

            {/* Custom Nav Buttons — hidden on mobile */}
            <button className="slider-prev absolute left-3 top-1/2 -translate-y-1/2 z-20
                               hidden md:flex items-center justify-center
                               w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full
                               shadow-lg hover:bg-white hover:scale-110 transition-all duration-200">
                <FaChevronLeft className="text-gray-700 text-sm" />
            </button>
            <button className="slider-next absolute right-3 top-1/2 -translate-y-1/2 z-20
                               hidden md:flex items-center justify-center
                               w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full
                               shadow-lg hover:bg-white hover:scale-110 transition-all duration-200">
                <FaChevronRight className="text-gray-700 text-sm" />
            </button>

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation={{
                    nextEl: '.slider-next',
                    prevEl: '.slider-prev',
                }}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                loop={true}
                speed={700}
                className="w-full !pb-8"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-44 sm:h-60 md:h-80 lg:h-[420px] overflow-hidden">

                            {/* Background Image */}
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover object-center"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

                            {/* Text Content */}
                            <div className={`absolute inset-0 flex flex-col justify-center px-5 sm:px-10 md:px-16
                                ${slide.align === 'center' ? 'items-center text-center' :
                                  slide.align === 'right' ? 'items-end text-right' :
                                  'items-start text-left'}`}>

                                <h2 className="text-white font-extrabold
                                               text-lg sm:text-2xl md:text-4xl lg:text-5xl
                                               drop-shadow-lg leading-tight max-w-xs sm:max-w-md md:max-w-xl">
                                    {slide.title}
                                </h2>

                                <p className="text-white/90 mt-1 sm:mt-2
                                              text-xs sm:text-sm md:text-base
                                              max-w-[220px] sm:max-w-sm md:max-w-md drop-shadow">
                                    {slide.subtitle}
                                </p>

                                <button className="mt-3 sm:mt-4
                                                   px-4 py-1.5 sm:px-6 sm:py-2 md:px-8 md:py-3
                                                   text-xs sm:text-sm md:text-base font-semibold
                                                   bg-white text-gray-900 rounded-full
                                                   hover:bg-[var(--primary)] hover:text-white
                                                   transition-all duration-300 shadow-md hover:scale-105 active:scale-95">
                                    {slide.cta}
                                </button>
                            </div>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Slider
