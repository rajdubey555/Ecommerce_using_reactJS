import React from 'react'
import { useSearchParams } from 'react-router-dom'

// Components
import SkeletonGrid from '../components/skeleton/SkeletonGrid'
import ProductSkeleton from '../components/skeleton/ProductSkeleton'
import EmptyState from '../components/common/EmptyState'
import ErrorState from '../components/common/ErrorState'
import ProductCard from '../components/ui/ProductCard'
import Pagination from '../components/common/Pagination'

// Hooks
import useSearch from '../hooks/useSearch'
import useCart from '../hooks/useCart'
import usePagination from '../hooks/usePagination'

const SearchPage = () => {

    // 🔍 Get query from URL
    const [searchParams] = useSearchParams()
    const query = searchParams.get("q")

    // 🛒 Cart
    const { addItem } = useCart()

    // 🔎 Search API
    const { products, loading, error } = useSearch(query)

    // 📄 Pagination
    const {
        currentPage,
        setCurrentPage,
        currentData,
        hasNextPage
    } = usePagination(products, 10)

    // ⏳ Loading State
    if (loading && products.length === 0) {
        return <SkeletonGrid count={8} Component={ProductSkeleton} />
    }

    // ❌ Error State
    if (error) {
        return <ErrorState message={error} />
    }

    // 📭 Empty State
    if (!products.length) {
        return (
            <EmptyState
                title="No Products Found"
                subtitle="Try changing search or filters"
            />
        )
    }

    return (
        <div className="mt-5 mb-5">

            {/* 🔤 Heading */}
            <div className="flex justify-center px-3">
                <h1 className="text-xl sm:text-2xl font-bold text-gray-700 text-center">
                    Results for "{query}"
                </h1>
            </div>

            {/* 🧱 PRODUCT GRID */}
            <div className="
                mt-4 
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
                    <ProductCard
                        key={elem.id}
                        product={elem}
                        onAddToCart={addItem}
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

        </div>
    )
}

export default SearchPage