import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

// Components
import ProductCard from '../components/ui/ProductCard'
import Pagination from '../components/common/Pagination'

// Hooks
import usePagination from '../hooks/usePagination'

const Wishlist = () => {

    const wishListItems = useSelector((state) => state.wishlist.items)
    const dispatch = useDispatch()

    // 📄 Pagination Hook (10 items per page)
    const {
        currentPage,
        setCurrentPage,
        currentData,
        hasNextPage
    } = usePagination(wishListItems, 10)

    // 💾 Save to LocalStorage
    useEffect(() => {
        try {
            const safeWishlist = wishListItems.map(item => ({
                id: item.id,
                title: item.title,
                price: item.price,
                images: item.images,
                discountPercentage: item.discountPercentage
            }))
            localStorage.setItem("wishlist", JSON.stringify(safeWishlist))
        } catch (error) {
            console.error("Error Saving Wishlist : ", error)
        }
    }, [wishListItems])

    return (
        <div className="min-h-screen py-6 px-3 sm:px-4" style={{ background: 'var(--bg)' }}>

            {/* 🔤 Heading */}
            <h1 className="text-xl sm:text-2xl font-bold text-center mb-6" style={{ color: 'var(--text)' }}>
                My Wishlist
            </h1>

            {/* 📭 Empty State */}
            {wishListItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center gap-4 mt-16">
                    <FaHeart className="text-7xl text-red-300" />
                    <p className="text-lg font-semibold" style={{ color: 'var(--text-muted)' }}>
                        Your wishlist is empty 😢
                    </p>
                    <Link to="/products">
                        <button
                            className="px-6 py-2.5 rounded-xl font-semibold text-white hover:opacity-90 transition"
                            style={{ background: 'var(--primary)' }}
                        >
                            Browse Products
                        </button>
                    </Link>
                </div>
            ) : (
                <>
                    {/* 🧱 GRID */}
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
                        {currentData.map((elem) => (
                            <ProductCard
                                key={elem.id}
                                product={elem}
                            />
                        ))}
                    </div>

                    {/* 📄 Pagination */}
                    <div className="mt-6 flex justify-center">
                        <Pagination
                            currentPage={currentPage}
                            onPageChange={setCurrentPage}
                            hasNextPage={hasNextPage}
                        />
                    </div>
                </>
            )}

        </div>
    )
}

export default Wishlist