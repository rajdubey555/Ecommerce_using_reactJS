import ProductCard from '../components/ui/ProductCard'
import ErrorState from '../components/common/ErrorState'
import EmptyState from '../components/common/EmptyState'
import useAllProduct from '../hooks/useAllProduct'
import Pagination from '../components/common/Pagination'
import usePagination from '../hooks/usePagination'
import SkeletonGrid from '../components/skeleton/SkeletonGrid'
import ProductSkeleton from '../components/skeleton/ProductSkeleton'
import FilterBar from '../components/ui/FilterBar'
import { useSelector } from 'react-redux'

const ProductPage = () => {

  const products = useSelector((state) => state.products.products)

  const { loading, error } = useAllProduct()
  const { currentPage,
    setCurrentPage,
    currentData,
    hasNextPage } = usePagination(products, 10)


  if (loading && products.length === 0)
    return <SkeletonGrid count={8} Component={ProductSkeleton} />;
  if (error) return <ErrorState message={error} />;


  return (
    <div className="space-y-6">

      <FilterBar />

      {!products.length ? (
        <EmptyState
          title="No Products Available"
          subtitle="Please check back later"
        />
      ) : (
        <>
          <div className="min-h-[300px] flex flex-col items-center justify-center">

            {currentData.length > 0 ? (
              <div className="flex flex-wrap gap-10 justify-center">
                {currentData.map((elem) => (
                  <ProductCard key={elem.id} product={elem} />
                ))}
              </div>
            ) : (
              <div className="text-center">
                <h2 className="text-xl font-semibold text-gray-700">
                  No Products Found 😕
                </h2>
                <p className="text-gray-500 mt-2">
                  Try adjusting filters or search again
                </p>
              </div>
            )}

          </div>


          {currentData.length > 0 && (
            <Pagination
              currentPage={currentPage}
              onPageChange={setCurrentPage}
              hasNextPage={hasNextPage}
            />
          )}
        </>
      )}

</div>
  );
}

export default ProductPage
