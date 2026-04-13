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
        <div className=' mb-5 px-4'>

            <div className='flex justify-between items-center px-2 md:px-5 mb-4'>
                <h1 className='text-2xl font-bold' style={{color: 'var(--text)'}}>Top Products</h1>
                <Link to="/products">
                    <button
                        className='h-10 text-lg hover:text-[var(--primary)] hover:scale-105 transition-all font-medium'
                        style={{color: 'var(--text-muted)'}}
                        type='button'
                    >
                        View all
                    </button>
                </Link>
            </div>
            <div className='w-full relative px-2 md:px-8'>
                {/* Left Button */}
                <button className="prev-btn absolute left-0 md:-left-2 top-1/2 z-10 -translate-y-1/2 shadow-lg border rounded-full w-10 h-10 hidden md:flex items-center justify-center hover:scale-110 transition"
                        style={{background: 'var(--card)', borderColor: 'var(--border)'}}>
                    <FaChevronLeft style={{color: 'var(--text-muted)'}} />
                </button>

                {/* Right Button */}
                <button className="next-btn absolute right-0 md:-right-2 top-1/2 z-10 -translate-y-1/2 shadow-lg border rounded-full w-10 h-10 hidden md:flex items-center justify-center hover:scale-110 transition"
                        style={{background: 'var(--card)', borderColor: 'var(--border)'}}>
                    <FaChevronRight style={{color: 'var(--text-muted)'}} />
                </button>



                <Swiper
                    className="pb-12"
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    speed={800}
                    breakpoints={{
                        0: { slidesPerView: 2, spaceBetween: 10 },  // mobile — 2 cards
                        480: { slidesPerView: 2, spaceBetween: 12 },
                        640: { slidesPerView: 3, spaceBetween: 16 },
                        768: { slidesPerView: 3, spaceBetween: 20 },
                        1024: { slidesPerView: 4, spaceBetween: 20 },
                        1280: { slidesPerView: 5, spaceBetween: 20 },
                        1536: { slidesPerView: 6, spaceBetween: 20 },
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
                        <SwiperSlide className='mb-7 flex justify-center items-center' key={elem.id}>


                            <ProductCard product={elem} />

                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default ProductCards
