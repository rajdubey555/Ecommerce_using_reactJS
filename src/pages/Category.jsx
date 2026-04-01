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

const Category = () => {

    const { name } = useParams()
    const dispatch = useDispatch()
    const { categoriesProduct, loading, error } = useCategoryProduct(name?.toLowerCase())
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        showSuccess("Product added to cart 🛒");
    };

    if (loading && categoriesProduct.length === 0)
        return  <SkeletonGrid count={8} Component={ProductSkeleton} />;
    if (error) return <ErrorState message={error} />;
    if (!categoriesProduct.length) return (<EmptyState title="No Products Found" subtitle="Try changing category or filters" />);

    return (
        <div className='mt-5 mb-5 '>
            <div className='flex  justify-center'>
                <h1 className='text-2xl font-bold px-5 items-center  text-gray-600 '>{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
            </div>
            <div
                className=" mt-1 pl-4 flex flex-wrap justify-center"
            >
                {categoriesProduct.map((elem) => (
                    <ProductCard
                        key={elem.id}
                        product={elem}
                        onAddToCart={handleAddToCart}
                    />
                ))}
            </div>
        </div >
    )
}

export default Category
