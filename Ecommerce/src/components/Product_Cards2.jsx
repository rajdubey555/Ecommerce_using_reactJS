import { useState } from 'react'
import React, { useEffect } from 'react'
import { singleProduct } from '../services/api'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import { Link } from "react-router-dom";

import 'swiper/css'
import 'swiper/css/navigation'

const Product_Cards2 = () => {

    const [productData, setProductData] = useState([])

    useEffect(() => {
        const fetchData = async () =>{
            const data = await singleProduct()
            setProductData(data)
            console.log(data)
        }
        fetchData()
    },[])


    return (
        <div className='mt-5 mb-5 '>
            <div className='flex justify-between'>
                <h1 className='text-2xl font-bold px-5 text-gray-600 '>Top Category</h1>
                <button className=' h-10 w-20 text-lg text-gray-800' type='button'>View all</button>
            </div>
            <Swiper
                modules={[Navigation, Autoplay]}
                navigation
                autoplay={{ delay: 2000 }}
                spaceBetween={20}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 3 },
                    768: { slidesPerView: 5 },
                    1024: { slidesPerView: 8 },
                }}
                className=" mt-1 pl-4 pr-7-40"
            >
                {productData.map((elem) => {
                    return <SwiperSlide key={elem.id}>
                        <div className=' h-60 w-50 m-2 rounded-3xl hover:scale-105 relative'>

                             <Link to={`/Category/${elem.category}`}>
                            <div className='h-[80%] rounded-3xl  p-4'>
                                <img className='w-full h-full   p-5 hover:border-2 hover:border-blue-700 bg-gray-200 object-contain rounded-full ' src={elem.image} alt="" />
                            </div>
                            <div className='flex gap-1 flex-col px-4 font-bold items-center'>
                                <h1 className='line-clamp-1'>{elem.category}</h1>
                                
                            </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                })}
            </Swiper>
        </div>
    )
}

export default Product_Cards2
