import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import useProducts from '../../hooks/useProducts'
import ProductCard from './ProductCard'
import ErrorState from '../common/ErrorState'
import EmptyState from '../common/EmptyState'
import { Link } from 'react-router-dom'
import SkeletonGrid from '../skeleton/SkeletonGrid'
import ProductSkeleton from '../skeleton/ProductSkeleton'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const ProductCards = () => {

    const { products, loading, error } = useProducts()



    if (loading && !products.length)
        return <SkeletonGrid count={8} Component={ProductSkeleton} />;


    if (error) return <ErrorState message={error} />;
    if (!products.length) return (<EmptyState title="No Products Found" subtitle="Try changing category or filters" />);

    return (
        <div className='mt-5 mb-5 px-4'>

            <div className='flex justify-between items-center '>
                <h1 className='text-2xl font-bold px-5 text-gray-600 '>Top Products</h1>
                <Link to="/products">
                    <button
                        className=' h-10 w-20 text-lg text-gray-800 hover:text-blue-800 hover:scale-105' type='button'
                    >
                        View all
                    </button>
                </Link>
            </div>
            <div className='w-full relative  px-8'>
                {/* Left Button */}
                <button className="prev-btn absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-white shadow-md  rounded-full hover:scale-110 transition">
                    <FaChevronLeft />
                </button>

                {/* Right Button */}
                <button className="next-btn absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-white shadow-md  rounded-full hover:scale-110 transition">
                    <FaChevronRight />
                </button>



                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    speed={800}
                    breakpoints={{
                        0: { slidesPerView: 1 },        // very small phones
                        480: { slidesPerView: 2 },      // small phones
                        640: { slidesPerView: 2 },      // large phones
                        768: { slidesPerView: 3 },      // tablets
                        1024: { slidesPerView: 4 },     // small laptops
                        1280: { slidesPerView: 5 },     // desktops
                        1536: { slidesPerView: 8 },     // large screens
                    }}
                    centeredSlides={false}
                    navigation={{
                        nextEl: '.next-btn',
                        prevEl: '.prev-btn',
                    }}
                    loop={true}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                >

                    {products?.map((elem) => (
                        <SwiperSlide className='mb-7' key={elem.id}>
                          

                            <ProductCard product={elem} />
                          
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default ProductCards
