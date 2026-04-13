import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useProductDetails from '../hooks/useProductDetails'
import SkeletonGrid from '../components/skeleton/SkeletonGrid'
import ProductSkeleton from '../components/skeleton/ProductSkeleton'
import ErrorState from '../components/common/ErrorState'

// ICONS
import { FaStar, FaRegStar, FaShoppingCart, FaBolt, FaTruck, FaUserCircle, FaTag } from "react-icons/fa";
import { MdLocalOffer, MdVerified } from "react-icons/md";
import useCart from '../hooks/useCart'

const ProductDetailsPage = () => {
    const { id } = useParams()
    const { product, loading, error } = useProductDetails(id)

    const [selectedImage, setSelectedImage] = useState(0)

    if (loading)
        return <SkeletonGrid count={8} Component={ProductSkeleton} />
    if (error) return <ErrorState message={error} />

//AddToCart
const {addItem} = useCart()

    // PRICE CALCULATION
    const discountedPrice = product.price - (product.price * product.discountPercentage / 100)

    // STAR RENDER
    const renderStars = (rating) => {
        const fullStars = Math.round(rating)
        return (
            <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) =>
                    i < fullStars ? <FaStar key={i} className="text-yellow-400" /> : <FaRegStar key={i} className="text-gray-300" />
                )}
            </div>
        )
    }

    return (
        <div className="py-8" style={{background: 'var(--bg)'}}>

            <div className="max-w-7xl mx-auto px-4">

                {/* TOP SECTION */}
                <div className="rounded-xl shadow-sm p-4 md:p-6 flex flex-col lg:grid lg:grid-cols-12 gap-8 border"
                     style={{background: 'var(--card)', borderColor: 'var(--border)'}}>

                    {/* LEFT - IMAGES */}
                    <div className="w-full lg:col-span-5 flex flex-col-reverse md:flex-row gap-4">

                        {/* Thumbnails */}
                        <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
                            {product?.images?.map((img, i) => (
                                <img
                                    key={i}
                                    src={img}
                                    alt="thumb"
                                    onClick={() => setSelectedImage(i)}
                                    className={`w-16 h-16 object-cover rounded cursor-pointer shrink-0 border-2 transition
                                        ${selectedImage === i ? "border-[var(--primary)]" : "border-[var(--border)]"}`}
                                />
                            ))}
                        </div>

                        {/* Main Image */}
                        <div className="flex-1 flex items-center justify-center rounded-lg overflow-hidden"
                             style={{background: 'var(--bg-secondary)'}}>
                            <img
                                src={product?.images?.[selectedImage]}
                                alt={product?.title}
                                className="w-full max-w-md object-contain hover:scale-105 transition"
                            />
                        </div>

                    </div>

                    {/* RIGHT - DETAILS */}
                    <div className="w-full lg:col-span-7 space-y-4">

                        {/* TITLE */}
                        <h1 className="text-xl md:text-2xl font-semibold" style={{color: 'var(--text)'}}>
                            {product.title}
                        </h1>

                        {/* CATEGORY + TAGS */}
                        <div className="flex flex-wrap items-center gap-2 md:gap-3 text-sm" style={{color: 'var(--text-muted)'}}>
                            <span className="flex items-center gap-1">
                                <FaTag /> {product.category}
                            </span>
                            {product.tags?.map((tag, i) => (
                                <span key={i} className="px-2 py-1 rounded text-xs border"
                                      style={{background: 'var(--bg-secondary)', color: 'var(--text-muted)', borderColor: 'var(--border)'}}>
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* RATING */}
                        <div className="flex items-center gap-3">
                            {renderStars(product.rating)}
                            <span className="text-sm" style={{color: 'var(--text-muted)'}}>
                                ({product.reviews?.length} Reviews)
                            </span>
                        </div>

                        {/* PRICE */}
                        <div className="flex flex-wrap items-center gap-2 md:gap-3">
                            <span className="text-2xl md:text-3xl font-bold" style={{color: 'var(--text)'}}>
                                ₹{Math.round(discountedPrice.toFixed(2))}
                            </span>
                            <span className="line-through" style={{color: 'var(--text-subtle)'}}>
                                ₹{Math.round(product.price)}
                            </span>
                            <span className="text-green-500 font-medium">
                                {Math.round(product.discountPercentage)}% OFF
                            </span>
                        </div>

                        {/* OFFERS */}
                        <div className="text-sm space-y-1">
                            <p className="flex items-center gap-2 text-green-500">
                                <MdLocalOffer className="shrink-0" /> Bank Offer Available
                            </p>
                            <p className="flex items-center gap-2 text-green-500">
                                <MdLocalOffer className="shrink-0" /> Special Discount Applied
                            </p>
                        </div>

                        {/* DELIVERY + STOCK */}
                        <div className="space-y-2 text-sm" style={{color: 'var(--text-muted)'}}>
                            <p className="flex items-center gap-2">
                                <FaTruck className="shrink-0" /> {product.shippingInformation}
                            </p>
                            <p className="flex items-center gap-2">
                                <FaTruck className="shrink-0" /> Stock: {product.stock}
                            </p>
                            <p className="flex items-center gap-2 text-green-500">
                                <MdVerified className="shrink-0" /> {product.availabilityStatus}
                            </p>
                        </div>

                        {/* BUTTONS */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button onClick={addItem} className="flex justify-center items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-medium shadow hover:scale-105 transition w-full sm:w-auto">
                                <FaShoppingCart /> Add to Cart
                            </button>
                            <button className="flex justify-center items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium shadow hover:scale-105 transition w-full sm:w-auto">
                                <FaBolt /> Buy Now
                            </button>
                        </div>

                    </div>

                </div>

                {/* DESCRIPTION */}
                <div className="mt-6 p-6 rounded-xl shadow-sm border"
                     style={{background: 'var(--card)', borderColor: 'var(--border)'}}>
                    <h2 className="text-lg font-semibold border-b pb-2" style={{color: 'var(--text)', borderColor: 'var(--border)'}}>Description</h2>
                    <p className="mt-3 leading-relaxed text-sm" style={{color: 'var(--text-muted)'}}>
                        {product.description}
                    </p>
                </div>

                {/* SPECIFICATIONS */}
                <div className="mt-6 p-6 rounded-xl shadow-sm border"
                     style={{background: 'var(--card)', borderColor: 'var(--border)'}}>
                    <h2 className="text-lg font-semibold border-b pb-2" style={{color: 'var(--text)', borderColor: 'var(--border)'}}>Specifications</h2>

                    <div className="grid grid-cols-2 gap-y-3 text-sm mt-4" style={{color: 'var(--text-muted)'}}>
                        <p><span className="font-medium" style={{color: 'var(--text)'}}>Brand:</span> {product.brand}</p>
                        <p><span className="font-medium" style={{color: 'var(--text)'}}>SKU:</span> {product.sku}</p>
                        <p><span className="font-medium" style={{color: 'var(--text)'}}>Weight:</span> {product.weight}g</p>
                        <p><span className="font-medium" style={{color: 'var(--text)'}}>Warranty:</span> {product.warrantyInformation}</p>
                        <p>
                            <span className="font-medium" style={{color: 'var(--text)'}}>Dimensions:</span>{" "}
                            {product.dimensions?.width} x {product.dimensions?.height} x {product.dimensions?.depth}
                        </p>
                    </div>
                </div>

                {/* REVIEWS */}
                <div className="mt-6 p-6 rounded-xl shadow-sm border"
                     style={{background: 'var(--card)', borderColor: 'var(--border)'}}>
                    <h2 className="text-lg font-semibold border-b pb-2" style={{color: 'var(--text)', borderColor: 'var(--border)'}}>Reviews</h2>

                    <div className="mt-4 space-y-4">
                        {product?.reviews?.map((review, i) => (
                            <div key={i} className="rounded-lg p-4 border" style={{borderColor: 'var(--border)', background: 'var(--bg-secondary)'}}>

                                <div className="flex items-center gap-3 mb-2">
                                    <FaUserCircle className="text-2xl" style={{color: 'var(--text-muted)'}} />
                                    <div>
                                        <p className="font-medium" style={{color: 'var(--text)'}}>{review.reviewerName}</p>
                                        <p className="text-xs" style={{color: 'var(--text-subtle)'}}>
                                            {new Date(review.date).toLocaleDateString()}
                                        </p>
                                    </div>
                                </div>

                                {renderStars(review.rating)}

                                <p className="mt-2 text-sm" style={{color: 'var(--text-muted)'}}>
                                    {review.comment}
                                </p>

                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ProductDetailsPage
