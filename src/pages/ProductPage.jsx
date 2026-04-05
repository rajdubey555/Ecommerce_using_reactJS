import ProductCard from '../components/ui/ProductCard'
import ErrorState from '../components/common/ErrorState'
import EmptyState from '../components/common/EmptyState'
import useAllProduct from '../hooks/useAllProduct'
import Pagination from '../components/common/Pagination'
import usePagination from '../hooks/usePagination'
import SkeletonGrid from '../components/skeleton/SkeletonGrid'
import ProductSkeleton from '../components/skeleton/ProductSkeleton'

const ProductPage = () => {

  const {  allProducts, loading, error } = useAllProduct()
 const {currentPage,
    setCurrentPage,
    currentData,
    hasNextPage} = usePagination(allProducts,10)

  if (loading && allProducts.length === 0)
        return <SkeletonGrid count={8} Component={ProductSkeleton}/>;
    if (error) return <ErrorState message={error} />;
    if (!allProducts.length) return (<EmptyState title="No Products Found" subtitle="Try changing category or filters" />);


  return (
    <div>
      <div className='flex flex-wrap gap-10 justify-center'>
        {currentData.map((elem)=>(
        <ProductCard key={elem.id} product={elem} />
      ))}
      </div>
      <div>
        <Pagination currentPage={currentPage} 
        onPageChange={setCurrentPage}
        hasNextPage={hasNextPage}/>
      </div>
      
    </div>
  )
}

export default ProductPage
