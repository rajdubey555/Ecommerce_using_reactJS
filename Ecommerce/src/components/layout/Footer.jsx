import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import dowPlayStore from "../../assets/button/dowPlayStore.png";
import dowAppStore from "../../assets/button/dowAppStore.png";


const Footer = () => {
    return (
        <div className='bg-blue-500 flex flex-col absolute w-full h-80'>
            <div className='flex w-full h-70'>
                <div className='w-1/3 flex flex-col gap-3 px-10 py-2  h-full '>
                    <h1 className='text-3xl  font-bold text-white'>RajCoder</h1>
                    <h3 className='text-white text-[20px] font-semibold'>Contact us</h3>
                    <div className='flex  items-center gap-2 '>
                        <div>
                            <FaWhatsapp color='white' size={20} />
                        </div>
                        <div className='flex flex-col leading-5 text-[14px]   text-white' >
                            <h3 className='font-medium'>Whatsapp</h3>
                            <h2 className='text-[12px] tracking-widest font-medium'>+91 7878787888</h2>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 '>
                        <div>
                            <IoCall color='white' size={20} />
                        </div>
                        <div className='flex flex-col leading-5 text-[14px]   text-white' >
                            <h3 className='font-medium'>Call us</h3>
                            <h2 className='text-[12px] tracking-widest font-medium'>+91 7878787888</h2>
                        </div>
                    </div>
                    <div className='flex  flex-col  gap-2 '>
                        <div className=' leading-5 text-[12px]  font-bold text-white'>
                            <h1>Download App </h1>
                        </div>
                        <div className='flex gap-2 ' >
                            <button className='w-30 h-full' >
                                <img src={dowPlayStore} alt="" />
                            </button>
                            <button className='w-30' >
                                <img src={dowAppStore} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
                
                <div className='w-1/3 flex flex-col gap-2 px-10 py-2  h-full '>
                    <h1 className='border-b pb-1 border-white text-white text-[20px]'>Most Popular Category</h1>
                    <ul type className=' list-disc pt-2 pl-6 text-white font-normal'>
                        <li>Staples</li>
                        <li>Beverages</li>
                        <li>Personal Care</li>
                        <li>Home Care</li>
                        <li>Baby Care</li>
                        <li>Vegetable & Fruits</li>
                        <li>Snacks & Foods</li>
                        <li>Daity & Bakery</li>
                    </ul>
                </div>
                 <div className='w-1/3 flex flex-col gap-2 px-10 py-2  h-full '>
                    <h1 className='border-b pb-1 border-white text-white text-[20px]'>Most Popular Category</h1>
                    <ul type className=' list-disc pt-2 pl-6 text-white font-normal'>
                        <li>Staples</li>
                        <li>Beverages</li>
                        <li>Personal Care</li>
                        <li>Home Care</li>
                        <li>Baby Care</li>
                        <li>Vegetable & Fruits</li>
                        <li>Snacks & Foods</li>
                        <li>Daity & Bakery</li>
                    </ul>
                </div>
               
            </div>
            <div className='border-t py-2 text-center font-bold text-white text-[13px]'>
                © 2026 All rights reserved. Raj Coder.
            </div>
        </div>
    )
}

export default Footer
