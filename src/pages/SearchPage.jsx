import React from 'react'
import SkeletonGrid from '../components/skeleton/SkeletonGrid';
import ProductSkeleton from '../components/skeleton/ProductSkeleton';
import EmptyState from '../components/common/EmptyState';
import ErrorState from '../components/common/ErrorState';
import useSearch from '../hooks/useSearch';
import ProductCard from '../components/ui/ProductCard';
import { useSearchParams } from 'react-router-dom';
import useCart from '../hooks/useCart';
import usePagination from '../hooks/usePagination';
import Pagination from '../components/common/Pagination';


const SearchPage = () => {
    const [searchParams] = useSearchParams()
    const query = searchParams.get("q")
const {addItem} = useCart()
    const { products, loading, error } = useSearch(query)

    const {currentPage,
    setCurrentPage,
    currentData,
    hasNextPage} = usePagination(products,10)

if (loading && products.length === 0)
        return <SkeletonGrid count={8} Component={ProductSkeleton}/>;
    if (error) return <ErrorState message={error} />;
    if (!products.length) return (<EmptyState title="No Products Found" subtitle="Try changing category or filters" />);


    return (
        <div className='mt-5 mb-5 '>
            <div className='flex  justify-center'>
                <h1 className='text-2xl font-bold px-5 items-center  text-gray-600 '>Results for "{query}"</h1>
            </div>
            <div
                className="mt-1 pl-4 flex flex-wrap gap-5 justify-center"
            >
                {currentData.map((elem) => (
                    <ProductCard
                        key={elem.id}
                        product={elem}
                        onAddToCart={addItem}
                    />
                ))}
            </div>
             <div>
                    <Pagination currentPage={currentPage} 
                    onPageChange={setCurrentPage}
                    hasNextPage={hasNextPage}/>
                  </div>
        </div >
    )

}
export default SearchPage
