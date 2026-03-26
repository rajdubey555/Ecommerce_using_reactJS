import { useState } from 'react'
import React, { useEffect } from 'react'
import s26 from '../assets/s26.webp'
import { singleProduct } from '../services/api'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from "../redux/features/cartSlice";


const Product_Cards = () => {

    const dispatch = useDispatch()

    const [productdata, setProductdata] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await singleProduct()
            setProductdata(data)
        }
        fetchData()
    }, [])

    return (
        <div className='mt-5 mb-5 '>
            <div className='flex justify-between'>
                <h1 className='text-2xl font-bold px-5 text-gray-600 '>Top Products</h1>
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
                {productdata.map((elem) => {
                    return <SwiperSlide key={elem.id}>
                        <div className='bg-gray-100 h-60 w-50 m-2 rounded-3xl hover:scale-102 relative'>

                            <div className='absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-bl-lg'>
                                56%  <br />OFF
                            </div>
                            <div className='h-[63%] rounded-3xl p-4'>
                                <img className='w-full h-full object-contain rounded-3xl ' src={elem.image} alt="" />
                            </div>
                            <div className='flex gap-1 flex-col px-4 font-bold items-1center'>
                                <h1 className='line-clamp-1'>{elem.title}</h1>
                                <h3>Price: ${Math.round(elem.price)}</h3>
                                <div className='flex gap-2 justify-center'>
                                    <button className='h-6 w-20 text-white rounded-lg text-[10px] bg-blue-800 active:scale-95' type='button'>Buy Now</button>
                                    <button className='h-6 w-20 text-white rounded-lg text-[10px] bg-red-800 active:scale-95' type='button' 
                                    onClick={()=>{
dispatch(addToCart(elem))
                                    }}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                })}
            </Swiper>
        </div>
    )
}

export default Product_Cards
