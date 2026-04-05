import { Link } from "react-router-dom";
import useCategories from '../../hooks/useCategories'
import ErrorState from '../common/ErrorState';
import EmptyState from '../common/EmptyState';
import { categoryImages } from '../../utils/categoryImages';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'


const ProductCategories = () => {

    const { categories, loading, error } = useCategories()

    if (error) return <ErrorState message={error} />;
    if (!loading && categories.length === 0) {
        return (
            <EmptyState
                title="No Category Found"
                subtitle="Try changing category or filters"
            />
        );
    }

    return (
        <div className='mt-5 mb-5 px-4'>

            {/* Header */}
            <div className='flex justify-between items-center '>
                <h1 className='text-2xl font-bold px-5 text-gray-600 '>Top Categories</h1>
                <Link to="/ProductDetailsPage">
                    <button
                        className=' h-10 w-20 text-lg text-gray-800 hover:text-blue-800 hover:scale-105' type='button'
                    >
                        View all
                    </button>
                </Link>
            </div>

            {/* Horizontal Scroll Container */}
            <div className='w-full relative'>
                {/* Left Button */}
                <button className="prev-btn absolute -left-2 top-1/2 z-10 -translate-y-1/2 bg-white shadow-md  rounded-full hover:scale-110 transition">
                    <FaChevronLeft />
                </button>

                {/* Right Button */}
                <button className="next-btn absolute -right-2 top-1/2 z-10 -translate-y-1/2 bg-white shadow-md  rounded-full hover:scale-110 transition">
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
                        768: { slidesPerView: 4 },      // tablets
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
                    {categories.map((item) => (
                        <SwiperSlide key={item.id} className="flex justify-center">

                            <div className='h-60 w-full max-w-45 mx-auto rounded-3xl transition-all duration-300 hover:scale-105 hover:shadow-lg'>

                                <Link to={`/category/${item.name}`}>

                                    <div className='h-[75%] p-3'>
                                        <img
                                            className='w-full h-full object-cover rounded-full bg-gray-200'
                                            src={categoryImages[item.slug]}
                                            alt={item.name}
                                        />
                                    </div>

                                    <div className='flex flex-col items-center font-semibold'>
                                        <h1 className='line-clamp-1'>{item.name}</h1>
                                    </div>

                                </Link>

                            </div>

                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </div>
    )
}

export default ProductCategories