import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import banner2 from '../assets/banner2.jpg'
import banner3 from '../assets/banner3.jpg'
import img1 from '../assets/8852975.jpg'

const Slider = () => {



    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false
            }}
            loop={true}
            speed={800}
            className='h-80 w-full mt-10'
        >
            <SwiperSlide >
                <img className='h-80 w-full object-fill' src={img1} />
            </SwiperSlide>

            <SwiperSlide>
                <img className='h-80 w-full object-fill' src={banner2} />
            </SwiperSlide>

            <SwiperSlide>
                <img className='h-80 w-full object-fill' src={banner3} />
            </SwiperSlide>
        </Swiper>
    )
}

export default Slider
