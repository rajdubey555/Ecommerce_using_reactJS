import 'swiper/css'
import 'swiper/css/navigation'
import { useDispatch } from 'react-redux'
import { addToCart } from "../redux/features/cartSlice";
import { showSuccess } from "../utils/toast";
import ErrorState from '../components/common/ErrorState'
import EmptyState from '../components/common/EmptyState'
import useCategoryProduct from '../hooks/useCategoryProduct'
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ui/ProductCard';
import ProductSkeleton from '../components/skeleton/ProductSkeleton';
import SkeletonGrid from '../components/skeleton/SkeletonGrid';
import { BsCart4 } from "react-icons/bs";
import usePagination from '../hooks/usePagination';
import Pagination from '../components/common/Pagination';

const Category = () => {

    const { name } = useParams()
    const dispatch = useDispatch()
    const { categoriesProduct, loading, error } = useCategoryProduct(name?.toLowerCase())

    const { currentPage,
        setCurrentPage,
        currentData,
        hasNextPage } = usePagination(categoriesProduct, 10)

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        showSuccess(
            <div className='flex justify-center items-center gap-2'>Product added to cart  <BsCart4 /> </div>);
    };

    if (loading && categoriesProduct.length === 0)
        return <SkeletonGrid count={8} Component={ProductSkeleton} />;
    if (error) return <ErrorState message={error} />;
    if (!categoriesProduct.length) return (<EmptyState title="No Products Found" subtitle="Try changing category or filters" />);

    return (
        <div className="min-h-screen py-6 px-3 sm:px-4" style={{ background: 'var(--bg)' }}>

            {/* Category Title */}
            <h1 className="text-xl sm:text-2xl font-bold text-center mb-5"
                style={{ color: 'var(--text)' }}>
                {name.charAt(0).toUpperCase() + name.slice(1)}
            </h1>

            {/* Product Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
                {currentData.map((elem) => (
                    <ProductCard
                        key={elem.id}
                        product={elem}
                        onAddToCart={handleAddToCart}
                    />
                ))}
            </div>

            {/* Pagination */}
            <div className="mt-6">
                <Pagination
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                    hasNextPage={hasNextPage}
                />
            </div>

        </div>
    )
}

export default Category
