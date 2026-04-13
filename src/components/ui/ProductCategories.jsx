import { Link } from "react-router-dom";
import useCategories from '../../hooks/useCategories'
import ErrorState from '../common/ErrorState';
import EmptyState from '../common/EmptyState';
import { categoryImages } from '../../utils/categoryImages';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'


const ProductCategories = () => {

    const { categories, loading, error } = useCategories()
    console.log(categories);

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
            <div className='flex justify-between items-center px-2 md:px-5 mb-4'>
                <h1 className='text-2xl font-bold' style={{color: 'var(--text)'}}>Top Categories</h1>
            </div>

            {/* Horizontal Scroll Container */}
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
                    className="py-2"
                    modules={[Navigation, Autoplay]}
                    spaceBetween={20}
                    speed={800}
                    breakpoints={{
                        0:    { slidesPerView: 3, spaceBetween: 10 },  // mobile — 3 circles
                        480:  { slidesPerView: 4, spaceBetween: 12 },
                        640:  { slidesPerView: 4, spaceBetween: 14 },
                        768:  { slidesPerView: 5, spaceBetween: 16 },
                        1024: { slidesPerView: 6, spaceBetween: 20 },
                        1280: { slidesPerView: 7, spaceBetween: 20 },
                        1536: { slidesPerView: 8, spaceBetween: 20 },
                    }}
                    centeredSlides={false}
                    navigation={{
                        nextEl: '.next-btn',
                        prevEl: '.prev-btn',
                    }}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                >
                    {categories.map((item) => (
                        <SwiperSlide key={item.id} className="flex justify-center">
                            <Link
                                to={`/category/${item.name}`}
                                className="flex flex-col items-center gap-2 group w-full py-2"
                            >
                                {/* Circle */}
                                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32
                                                rounded-full overflow-hidden
                                                border-2 border-gray-200 shadow-sm bg-gray-50 mx-auto
                                                group-hover:scale-105 group-hover:border-[var(--primary)]
                                                transition-all duration-200 shrink-0">
                                    <img
                                        className="w-full h-full object-cover"
                                        src={categoryImages[item.slug]}
                                        alt={item.name}
                                    />
                                </div>
                                {/* Label */}
                                <span className="text-[11px] sm:text-xs md:text-sm font-semibold
                                                 text-center line-clamp-2
                                                 leading-tight w-full px-1"
                                      style={{color: 'var(--text-muted)'}}>
                                    {item.name}
                                </span>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </div>
    )
}

export default ProductCategories