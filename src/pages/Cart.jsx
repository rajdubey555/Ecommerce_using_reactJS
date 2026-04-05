import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decQty, incQty, removeCart } from "../redux/features/cartSlice";
import { showSuccess } from "../utils/toast";
import { BsCart4 } from "react-icons/bs";

const Cart = () => {

    const cartItems = useSelector((state) => state.cart.cartItems)
    const dispatch = useDispatch()
    const totalPrice =Math.round(cartItems.reduce((total, item) => {
        return total + item.price * item.quantity
    }, 0))
   useEffect(() => {
    try {
        const safeCart = cartItems.map(item => ({
            id: item.id,
            title: item.title,
            price: item.price,
            quantity: item.quantity,
            images: item.images
        }))

        localStorage.setItem("cart", JSON.stringify(safeCart))
    } catch (err) {
        console.error("Error saving cart:", err)
    }
}, [cartItems])

    return (
        <div className="min-h-screen bg-gray-100 p-6">

            <h2 className=" flex justify-center items-center gap-2 text-3xl font-bold mb-6 text-center text-gray-800">
                 My Cart<BsCart4  color='' />
            </h2>

            {cartItems.length === 0 ? (
                <div className="flex justify-center items-center h-[60vh]">
                    <p className="text-gray-500 text-lg">Your cart is empty 😢</p>
                </div>
            ) : (

                <div className="max-w-5xl mx-auto space-y-4">

                    {cartItems.map((item) => (
                        <div
                          
                            className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-md"
                        >

                            {/* LEFT */}
                            <div className="flex items-center gap-4">
                                <img
                                    src={item.images?.[0]}
                                    alt={item.title}
                                    className="w-20 h-20 object-contain rounded-lg"
                                />

                                <div>
                                    <h3 className="text-lg font-semibold">{item.title}</h3>
                                    <p className="text-gray-500">₹{Math.round(item.price)}</p>

                                    {/* Quantity Controls */}
                                    <div className="flex items-center gap-2 mt-2">

                                        <button
                                            onClick={() => dispatch(decQty(item.id))}
                                            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                        >
                                            -
                                        </button>

                                        <span className="font-medium">{item.quantity}</span>

                                        <button
                                            onClick={() => dispatch(incQty(item.id))}
                                            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                        >
                                            +
                                        </button>

                                    </div>
                                </div>
                            </div>

                            {/* RIGHT */}
                            <div className="text-right">
                                <p className="text-lg font-bold text-green-600">
                                    ₹{Math.round(item.price * item.quantity)}
                                </p>

                                <button
                                    onClick={() =>{ dispatch(removeCart(item.id))
                                        showSuccess("Product Remove From the Cart")
                                    }}
                                    className="mt-2 text-red-500 hover:underline text-sm"
                                >
                                    Remove
                                </button>
                            </div>

                        </div>
                    ))}

                    {/* TOTAL */}
                    <div className="bg-white p-5 rounded-2xl shadow-md mt-6">
                        <div className="flex justify-between text-lg font-semibold">
                            <span>Total</span>
                            <span>
                                ₹{totalPrice}
                            </span>
                        </div>

                        <button className="w-full mt-4 bg-black text-white py-3 rounded-xl hover:bg-gray-800">
                            Checkout
                        </button>
                    </div>

                </div>
            )}
        </div>
    )
}

export default Cart