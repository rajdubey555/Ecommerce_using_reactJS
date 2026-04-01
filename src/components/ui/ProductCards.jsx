import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import useProducts from '../../hooks/useProducts'
import ProductCard from './ProductCard'
import { Loader } from 'lucide-react'
import ErrorState from '../common/ErrorState'
import EmptyState from '../common/EmptyState'
import { Link } from 'react-router-dom'


const ProductCards = () => {

    const { products, loading, error } = useProducts()




    
    if (error) return <ErrorState message={error} />;
    if (!products.length) return (<EmptyState title="No Products Found" subtitle="Try changing category or filters" />);

    return (
        <div className='mt-5 mb-5 '>
            <div className='flex justify-between'>
                <h1 className='text-2xl font-bold px-5 text-gray-600 '>Top Products</h1>
               <Link to="/ProductPage"> <
                button
                className=' h-10 w-20 text-lg text-gray-800 hover:text-blue-800 hover:scale-105' type='button'>View all</button>
                </Link>
            </div>
            <Swiper
                modules={[Navigation, Autoplay]}
                navigation
                autoplay={{ delay: 2000 }}
                spaceBetween={20}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 3 },
                    768: { slidesPerView: 4 },
                    1024: { slidesPerView: 8 },
                }}
                className=" mt-1 pl-4"
            >
                {products?.map((elem) => {
                    return <SwiperSlide key={elem.id}>
                        <ProductCard key={elem.id} product={elem} />
                    </SwiperSlide>
                })}
            </Swiper>
        </div>
    )
}

export default ProductCards
