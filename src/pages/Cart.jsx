import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decQty, incQty, removeCart } from "../redux/features/cartSlice";
import { showSuccess } from "../utils/toast";
import { BsCart4 } from "react-icons/bs";
import { FaTrash, FaRupeeSign, FaShoppingBag } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Cart = () => {

    const cartItems = useSelector((state) => state.cart.cartItems)
    const dispatch = useDispatch()

    const totalPrice = Math.round(cartItems.reduce((total, item) => total + item.price * item.quantity, 0))
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)
    const totalSavings = Math.round(cartItems.reduce((total, item) => {
        const original = item.price / (1 - (item.discountPercentage || 0) / 100)
        return total + (original - item.price) * item.quantity
    }, 0))

    useEffect(() => {
        try {
            const safeCart = cartItems.map(item => ({
                id: item.id, title: item.title,
                price: item.price, quantity: item.quantity,
                images: item.images, discountPercentage: item.discountPercentage
            }))
            localStorage.setItem("cart", JSON.stringify(safeCart))
        } catch (err) {
            console.error("Error saving cart:", err)
        }
    }, [cartItems])

    // ── Empty State ──
    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-5 px-4"
                 style={{ background: 'var(--bg)' }}>
                <BsCart4 className="text-8xl" style={{ color: 'var(--text-subtle)' }} />
                <h2 className="text-2xl font-bold" style={{ color: 'var(--text-muted)' }}>Your cart is empty!</h2>
                <p className="text-sm text-center" style={{ color: 'var(--text-subtle)' }}>Looks like you haven't added anything yet.</p>
                <Link to="/products">
                    <button className="bg-[var(--primary)] text-white px-8 py-3 rounded-xl font-semibold hover:opacity-90 active:scale-95 transition-all">
                        Start Shopping
                    </button>
                </Link>
            </div>
        )
    }

    return (
        <div className="min-h-screen" style={{ background: 'var(--bg)' }}>

            {/* Page Header */}
            <div className="border-b px-4 md:px-8 py-4"
                 style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
                <h1 className="text-xl md:text-2xl font-bold flex items-center gap-2"
                    style={{ color: 'var(--text)' }}>
                    <BsCart4 />
                    My Cart
                    <span className="ml-1 text-sm font-normal px-2 py-0.5 rounded-full"
                          style={{ color: 'var(--text-muted)', background: 'var(--bg-secondary)' }}>
                        {totalItems} item{totalItems > 1 ? 's' : ''}
                    </span>
                </h1>
            </div>

            <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 py-6">

                {/* ── Two-column on desktop ── */}
                <div className="flex flex-col lg:flex-row gap-6 items-start">

                    {/* ── LEFT: Cart Items ── */}
                    <div className="flex-1 w-full space-y-3">

                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="rounded-2xl shadow-sm border p-3 sm:p-4 flex gap-3 sm:gap-4"
                                style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
                            >
                                {/* Product Image */}
                                <Link to={`/product/${item.id}`} className="shrink-0">
                                    <img
                                        src={item.images?.[0]}
                                        alt={item.title}
                                        className="w-20 h-20 sm:w-24 sm:h-24 object-contain rounded-xl border"
                                        style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border)' }}
                                    />
                                </Link>

                                {/* Details */}
                                <div className="flex-1 min-w-0 flex flex-col justify-between">

                                    {/* Top row: title + delete */}
                                    <div className="flex justify-between items-start gap-2">
                                        <Link to={`/product/${item.id}`}>
                                            <h3 className="text-sm sm:text-base font-semibold line-clamp-2 hover:text-[var(--primary)] transition-colors"
                                                style={{ color: 'var(--text)' }}>
                                                {item.title}
                                            </h3>
                                        </Link>
                                        <button
                                            onClick={() => {
                                                dispatch(removeCart(item.id))
                                                showSuccess("Removed from cart")
                                            }}
                                            className="shrink-0 hover:text-red-500 transition-colors p-1 rounded-lg hover:bg-red-50"
                                            style={{ color: 'var(--text-subtle)' }}
                                        >
                                            <FaTrash className="text-sm" />
                                        </button>
                                    </div>

                                    {/* Bottom row: qty + price */}
                                    <div className="flex items-center justify-between mt-2 flex-wrap gap-2">

                                        {/* Quantity Toggle */}
                                        <div className="flex items-center rounded-lg overflow-hidden border"
                                             style={{ borderColor: 'var(--border)' }}>
                                            <button
                                                onClick={() => dispatch(decQty(item.id))}
                                                className="px-3 py-1.5 font-bold text-base transition-colors"
                                                style={{ color: 'var(--text-muted)' }}
                                                onMouseEnter={e => e.target.style.background='var(--bg-secondary)'}
                                                onMouseLeave={e => e.target.style.background='transparent'}
                                            >−</button>
                                            <span className="px-3 py-1.5 text-sm font-semibold border-x min-w-[36px] text-center"
                                                  style={{ color: 'var(--text)', borderColor: 'var(--border)' }}>
                                                {item.quantity}
                                            </span>
                                            <button
                                                onClick={() => dispatch(incQty(item.id))}
                                                className="px-3 py-1.5 font-bold text-base transition-colors"
                                                style={{ color: 'var(--text-muted)' }}
                                                onMouseEnter={e => e.target.style.background='var(--bg-secondary)'}
                                                onMouseLeave={e => e.target.style.background='transparent'}
                                            >+</button>
                                        </div>

                                        {/* Price */}
                                        <div className="text-right">
                                            <p className="text-base sm:text-lg font-bold flex items-center justify-end"
                                               style={{ color: 'var(--text)' }}>
                                                <FaRupeeSign className="text-xs mr-0.5" />
                                                {Math.round(item.price * item.quantity)}
                                            </p>
                                            <p className="text-xs" style={{ color: 'var(--text-subtle)' }}>
                                                ₹{Math.round(item.price)} × {item.quantity}
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>

                    {/* ── RIGHT: Order Summary (sticky on desktop) ── */}
                    <div className="w-full lg:w-80 xl:w-96 lg:sticky lg:top-6 shrink-0">
                        <div className="rounded-2xl shadow-sm border p-5 space-y-4"
                             style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>

                            <h2 className="text-lg font-bold border-b pb-3"
                                style={{ color: 'var(--text)', borderColor: 'var(--border)' }}>
                                Order Summary
                            </h2>

                            {/* Breakup */}
                            <div className="space-y-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                                <div className="flex justify-between">
                                    <span>Items ({totalItems})</span>
                                    <span>₹{totalPrice + totalSavings}</span>
                                </div>
                                {totalSavings > 0 && (
                                    <div className="flex justify-between text-green-500">
                                        <span>Discount</span>
                                        <span>− ₹{totalSavings}</span>
                                    </div>
                                )}
                                <div className="flex justify-between">
                                    <span>Delivery</span>
                                    <span className="text-green-500 font-medium">FREE</span>
                                </div>
                            </div>

                            {/* Total */}
                            <div className="flex justify-between items-center text-lg font-bold border-t pt-3"
                                 style={{ color: 'var(--text)', borderColor: 'var(--border)' }}>
                                <span>Total</span>
                                <span className="text-xl">₹{totalPrice}</span>
                            </div>

                            {/* Savings pill */}
                            {totalSavings > 0 && (
                                <div className="bg-green-500/10 text-green-500 text-xs font-semibold text-center py-2 rounded-lg">
                                    🎉 You're saving ₹{totalSavings} on this order!
                                </div>
                            )}

                            {/* Checkout Button */}
                            <Link to="/checkout" className="block">
                                <button className="w-full bg-[var(--primary)] text-white py-3.5 rounded-xl font-bold text-base
                                                   hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-md">
                                    <FaShoppingBag />
                                    Proceed to Checkout
                                </button>
                            </Link>

                            {/* Continue Shopping */}
                            <Link to="/products" className="block text-center text-sm text-[var(--primary)] hover:underline font-medium">
                                ← Continue Shopping
                            </Link>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Cart