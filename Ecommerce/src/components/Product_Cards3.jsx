import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Link } from "react-router-dom";


import { EffectCoverflow, Pagination,Autoplay } from 'swiper/modules';

const Product_Cards3 = () => {

  const slider = [ {
      id: 1,
      img: "https://swiperjs.com/demos/images/nature-1.jpg"
    },
    {
      id: 2,
      img: "https://swiperjs.com/demos/images/nature-2.jpg"
    },
    {
      id: 3,
      img: "https://swiperjs.com/demos/images/nature-3.jpg"
    },
    {
      id: 4,
      img: "https://swiperjs.com/demos/images/nature-4.jpg"
    },
    {
      id: 5,
      img: "https://swiperjs.com/demos/images/nature-5.jpg"
    },]

  return (
   
    <div className='flex flex-col'>
      <div>
     <h1 className='text-2xl font-bold px-5 text-gray-600 '>Top <span className='text-blue-600'>Electronics Brands</span></h1>
      </div>
        <div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        initialSlide={1}
        autoplay={{ delay: 3000 }}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination,Autoplay]}
        className="w-full mb-10 mt-5 mx-auto py-10"
      >
       
        {slider.map((item) =>{
          return <SwiperSlide
            key={item.id}
            className="w-75 rounded-2xl overflow-hidden shadow-xl bg-white"
          >
            <Link to={`/Category/${item.id}`}>
            <img
              src={item.img}
              className="w-full h-50 object-cover"
              alt="slide"
            />
            </Link>
          </SwiperSlide>
        })}
      </Swiper>
      </div>
        </div>
    
  
  );
}

export default Product_Cards3