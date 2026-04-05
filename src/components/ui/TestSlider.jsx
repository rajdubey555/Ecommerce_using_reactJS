import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation, Pagination,Autoplay } from 'swiper/modules'

const TestSlider = () => {
    return (
        <div className='w-full h-80 mt-5 mb-5 px-8'>
            <button className="prev-btn absolute left-1 top-1/2 -translate-y-1/2 z-10  rounded-full">
                ⬅
            </button>

            <button className="next-btn absolute right-1 top-1/2 -translate-y-1/2 z-10 rounded-full ">
                ➡
            </button>
            <Swiper 
                modules={[Navigation, Pagination,Autoplay]}
                slidesPerView={2}
                spaceBetween={20}
                speed={800}
                breakpoints={{
                    320: { slidesPerView: 3 },
                    640: { slidesPerView: 3 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 5 },
                }}
                navigation={{
                    nextEl: '.next-btn',
                    prevEl: '.prev-btn',
                }}
                loop={true}
                pagination={{ clickable: true }}
                autoplay={{
                    delay:2000,
                    disableOnInteraction:false,
                    pauseOnMouseEnter:true,
                }}
                className='h-80'>
                <SwiperSlide className='bg-red-600'>First</SwiperSlide>
                <SwiperSlide className='bg-yellow-400 '>Slide 2</SwiperSlide>
                <SwiperSlide className='bg-red-600 '>Slide 3</SwiperSlide>
                <SwiperSlide className='bg-yellow-400 '>Slide 1</SwiperSlide>
                <SwiperSlide className='bg-red-600 '>Slide 2</SwiperSlide>
                <SwiperSlide className='bg-yellow-400 '>Slide 3</SwiperSlide>
                <SwiperSlide className='bg-red-600 '>Slide 1</SwiperSlide>
                <SwiperSlide className='bg-yellow-400 '>Slide 2</SwiperSlide>
                <SwiperSlide className='bg-red-600 '>Slide 3</SwiperSlide>
                <SwiperSlide className='bg-yellow-400 '>Slide 1</SwiperSlide>
                <SwiperSlide className='bg-red-600 '>Slide 2</SwiperSlide>
                <SwiperSlide className='bg-yellow-400 '>Slide 3</SwiperSlide>
                <SwiperSlide className='bg-red-600 '>Slide 1</SwiperSlide>
                <SwiperSlide className='bg-yellow-400 '>Slide 2</SwiperSlide>
                <SwiperSlide className='bg-red-600 '>Last</SwiperSlide>
            </Swiper>
        </div >
    )
}

export default TestSlider
