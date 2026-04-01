import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from "../../redux/features/cartSlice";
import { showSuccess } from "../../utils/toast";

const ProductCard = ({ product ,onAddToCart}) => {

    const dispatch = useDispatch()
     const handleAddToCart = () => {
        if (onAddToCart) {
            onAddToCart(product)   // custom behavior
        } else {
            dispatch(addToCart(product))  // default behavior
            showSuccess("Product added to cart 🛒");
        }
    }

    return (
        <div className='bg-gray-100 h-60 w-50 m-2 rounded-3xl hover:scale-105 relative'>

            <div className='absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-bl-lg'>
                {Math.round(product.discountPercentage)}% <br />OFF
            </div>
            <div className='h-[63%] rounded-3xl p-4'>
                <img className='w-full h-full object-contain rounded-3xl ' src={product?.images?.[0]} alt={product.title} />
            </div>
            <div className='flex gap-1 flex-col px-4 font-bold items-center'>
                <h1 className='line-clamp-1'>{product.title}</h1>
                <h3>Price: ₹{Math.round(product.price)}</h3>
                <div className='flex gap-2 justify-center'>
                    <button className='h-6 w-20 text-white rounded-lg text-[10px] bg-blue-800 active:scale-95' type='button'>Buy Now</button>
                    <button className='h-6 w-20 text-white rounded-lg text-[10px] bg-red-800 active:scale-95' type='button'
                        onClick={() => {
                            handleAddToCart()
                        }}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
