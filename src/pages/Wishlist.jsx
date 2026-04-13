import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

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
        <div className="mt-5 mb-5">

            {/* 🔤 Heading */}
            <h1 className="text-xl sm:text-2xl font-bold text-center text-gray-700 mb-4">
                My Wishlist
            </h1>

            {/* 📭 Empty State */}
            {wishListItems.length === 0 ? (
                <div className="text-center text-gray-500 mt-10">
                    Your wishlist is empty 😢
                </div>
            ) : (
                <>
                    {/* 🧱 GRID */}
                    <div className="
                        px-3
                        grid
                        grid-cols-2
                        sm:grid-cols-2
                        md:grid-cols-3
                        lg:grid-cols-4
                        xl:grid-cols-5
                        gap-4
                    ">
                        {currentData.map((elem) => (
                            <ProductCard className="h-120"
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