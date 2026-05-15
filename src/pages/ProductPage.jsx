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
  const { currentPage, setCurrentPage, currentData, hasNextPage } = usePagination(products, 10)

  if (loading && products.length === 0)
    return <SkeletonGrid count={8} Component={ProductSkeleton} />;
  if (error) return <ErrorState message={error} />;

  return (
    <div className="min-h-screen py-4" style={{ background: 'var(--bg)' }}>

      <FilterBar />

      {!products.length ? (
        <EmptyState
          title="No Products Available"
          subtitle="Please check back later"
        />
      ) : (
        <div className="px-3 sm:px-4 mt-4">

          {currentData.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
              {currentData.map((elem) => (
                <ProductCard key={elem.id} product={elem} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-xl font-semibold" style={{ color: 'var(--text-muted)' }}>
                No Products Found 😕
              </h2>
              <p className="mt-2 text-sm" style={{ color: 'var(--text-subtle)' }}>
                Try adjusting filters or search again
              </p>
            </div>
          )}

          {currentData.length > 0 && (
            <div className="mt-6">
              <Pagination
                currentPage={currentPage}
                onPageChange={setCurrentPage}
                hasNextPage={hasNextPage}
              />
            </div>
          )}

        </div>
      )}

    </div>
  );
}

export default ProductPage
