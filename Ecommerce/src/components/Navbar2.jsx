import React from 'react'
import { HouseHeartIcon, ShoppingCart,CircleUserRound, Info} from 'lucide-react';
import { Link } from "react-router-dom";
const Navbar2 = () => {
    return (
        <div className='flex justify-center items-center gap-5 text-xl font-bold text-gray-500'>
            <div className='flex flex-row items-center justify-center gap-1'>
                <Link to="/" className='flex items-center gap-1 font-medium hover:underline'>
                    <HouseHeartIcon color="#0565ff" />
                    <span> Home </span>
                </Link>
            </div>
            |
            <div className='flex flex-row items-center gap-1'>
                <Link to="/about" className='flex items-center gap-1 font-medium hover:underline'>
                    <Info color="#0565ff" />
                    <span> About </span>
                </Link>
            </div>
            |
            <div className='flex flex-row items-center gap-1'>
                <Link to="/contact" className='flex items-center gap-1 font-medium hover:underline'>
                    <CircleUserRound color="#0565ff" />
                    <span> Contact </span>
                </Link>
            </div>
            |
            <div className='flex flex-row items-center gap-1'>
                <Link to="" className='flex items-center gap-1 font-medium hover:underline'>
                    <ShoppingCart color="#0565ff" />
                    <span> Cart </span>
                </Link>
            </div>
        </div>
    )
}

export default Navbar2
