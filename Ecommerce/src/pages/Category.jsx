import { useState } from 'react'
import React, { useEffect } from 'react'
import { CategoryData } from '../services/api'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import { useParams } from "react-router-dom";
import 'swiper/css'
import 'swiper/css/navigation'
import { useDispatch } from 'react-redux'
import { addToCart } from "../redux/features/cartSlice";
const Category = () => {

    const dispatch = useDispatch()

    const [productData, setProductData] = useState([])

    const { name } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            const data = await CategoryData(name)
            setProductData(data)
            console.log(data);

        }
        fetchData()
    }, [name])

    return (
        <div className='mt-5 mb-5 '>
            <div className='flex  justify-center'>
                <h1 className='text-2xl font-bold px-5 items-center  text-gray-600 '>{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
            </div>
            <div
                className=" mt-1 pl-4 flex flex-wrap"
            >
                {productData.map((elem) => {
                    return <div key={elem.id}>
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
                                    onClick={()=> dispatch(addToCart(elem))}
                                    >Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Category
