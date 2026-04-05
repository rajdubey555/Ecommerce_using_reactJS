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
        <div className="bg-gray-50 py-8">

            <div className="max-w-7xl mx-auto px-4">

                {/* TOP SECTION */}
                <div className="bg-white rounded-xl shadow-sm p-6 grid grid-cols-12 gap-8">

                    {/* LEFT - IMAGES */}
                    <div className="col-span-5 flex gap-4">

                        {/* Thumbnails */}
                        <div className="flex flex-col gap-3">
                            {product?.images?.map((img, i) => (
                                <img
                                    key={i}
                                    src={img}
                                    alt="thumb"
                                    onClick={() => setSelectedImage(i)}
                                    className={`w-16 h-16 object-cover rounded cursor-pointer 
                                        ${selectedImage === i ? "border-blue-500" : ""}`}
                                />
                            ))}
                        </div>

                        {/* Main Image */}
                        <div className="flex-1 flex items-center justify-center rounded-lg overflow-hidden">
                            <img
                                src={product?.images?.[selectedImage]}
                                alt={product?.title}
                                className="w-full max-w-md object-contain hover:scale-105 transition"
                            />
                        </div>

                    </div>

                    {/* RIGHT - DETAILS */}
                    <div className="col-span-7 space-y-4">

                        {/* TITLE */}
                        <h1 className="text-2xl font-semibold text-gray-800">
                            {product.title}
                        </h1>

                        {/* CATEGORY + TAGS */}
                        <div className="flex items-center gap-3 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                                <FaTag /> {product.category}
                            </span>
                            {product.tags?.map((tag, i) => (
                                <span key={i} className="bg-gray-100 px-2 py-1 rounded text-xs">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* RATING */}
                        <div className="flex items-center gap-3">
                            {renderStars(product.rating)}
                            <span className="text-sm text-gray-500">
                                ({product.reviews?.length} Reviews)
                            </span>
                        </div>

                        {/* PRICE */}
                        <div className="flex items-center gap-3">
                            <span className="text-3xl font-bold text-gray-800">
                                ₹{Math.round(discountedPrice.toFixed(2))}
                            </span>
                            <span className="line-through text-gray-400">
                                ₹{Math.round(product.price)}
                            </span>
                            <span className="text-green-600 font-medium">
                                {Math.round(product.discountPercentage)}% OFF
                            </span>
                        </div>

                        {/* OFFERS */}
                        <div className="text-sm space-y-1">
                            <p className="flex items-center gap-2 text-green-600">
                                <MdLocalOffer /> Bank Offer Available
                            </p>
                            <p className="flex items-center gap-2 text-green-600">
                                <MdLocalOffer /> Special Discount Applied
                            </p>
                        </div>

                        {/* DELIVERY + STOCK */}
                        <div className="space-y-2 text-sm text-gray-600">
                            <p className="flex items-center gap-2">
                                <FaTruck /> {product.shippingInformation}
                            </p>
                            <p className="flex items-center gap-2">
                                <FaTruck /> Stock: {product.stock}
                            </p>
                            <p className="flex items-center gap-2 text-green-600">
                                <MdVerified /> {product.availabilityStatus}
                            </p>
                        </div>

                        {/* BUTTONS */}
                        <div className="flex gap-4 pt-4">
                            <button onClick={addItem}  className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 px-6 py-3 rounded-lg font-medium shadow hover:scale-105 transition">
                                <FaShoppingCart /> Add to Cart
                            </button>
                            <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium shadow hover:scale-105 transition">
                                <FaBolt /> Buy Now
                            </button>
                        </div>

                    </div>

                </div>

                {/* DESCRIPTION */}
                <div className="bg-white mt-6 p-6 rounded-xl shadow-sm">
                    <h2 className="text-lg font-semibold border-b pb-2">Description</h2>
                    <p className="text-gray-700 mt-3 leading-relaxed text-sm">
                        {product.description}
                    </p>
                </div>

                {/* SPECIFICATIONS */}
                <div className="bg-white mt-6 p-6 rounded-xl shadow-sm">
                    <h2 className="text-lg font-semibold border-b pb-2">Specifications</h2>

                    <div className="grid grid-cols-2 gap-y-3 text-sm mt-4">
                        <p><span className="font-medium">Brand:</span> {product.brand}</p>
                        <p><span className="font-medium">SKU:</span> {product.sku}</p>
                        <p><span className="font-medium">Weight:</span> {product.weight}g</p>
                        <p><span className="font-medium">Warranty:</span> {product.warrantyInformation}</p>
                        <p>
                            <span className="font-medium">Dimensions:</span>{" "}
                            {product.dimensions?.width} x {product.dimensions?.height} x {product.dimensions?.depth}
                        </p>
                    </div>
                </div>

                {/* REVIEWS */}
                <div className="bg-white mt-6 p-6 rounded-xl shadow-sm ">
                    <h2 className="text-lg font-semibold border-b pb-2">Reviews</h2>

                    <div className="mt-4 space-y-4">
                        {product?.reviews?.map((review, i) => (
                            <div key={i} className=" rounded-lg p-4">

                                <div className="flex items-center gap-3 mb-2">
                                    <FaUserCircle className="text-2xl text-gray-400" />
                                    <div>
                                        <p className="font-medium">{review.reviewerName}</p>
                                        <p className="text-xs text-gray-500">
                                            {new Date(review.date).toLocaleDateString()}
                                        </p>
                                    </div>
                                </div>

                                {renderStars(review.rating)}

                                <p className="text-gray-600 mt-2 text-sm">
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