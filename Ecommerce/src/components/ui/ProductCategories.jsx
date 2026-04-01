import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import { Link } from "react-router-dom";
import 'swiper/css'
import 'swiper/css/navigation'
import useCategories from '../../hooks/useCategories'
import ErrorState from '../common/ErrorState';
import EmptyState from '../common/EmptyState';
import { categoryImages } from '../../utils/categoryImages';

const ProductCategories = () => {

   const {categories,loading,error} = useCategories()

    if (error) return <ErrorState message={error} />;
    if (!categories.length) return (<EmptyState title="No Category Found" subtitle="Try changing category or filters" />);





    return (
        <div className='mt-5 mb-5 relative  overflow-hidden'>
            <div className='flex justify-between'>
                <h1 className='text-2xl font-bold px-5 text-gray-600 '>Top Category</h1>
                <button className=' h-10 w-20 text-lg text-gray-800' type='button'>View all</button>
            </div>
            <Swiper
                modules={[Navigation, Autoplay]}
                navigation
                autoplay={{ delay: 2000 }}
                spaceBetween={0}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 3 },
                    768: { slidesPerView: 4 },
                    1024: { slidesPerView: 7 },
                }}
                 className="mt-1 "
            >
                {categories.map((item) => {
                    return <SwiperSlide key={item.id}>
                        <div className=' h-60 w-44 m-2 rounded-3xl hover:scale-105 relative '>

                             <Link to={`/category/${item.name}`}>
                            <div className='h-[75%] rounded-3xl  p-3'>
                                <img className='w-full h-full  hover:border-2 hover:border-blue-700 bg-gray-200 object-cover rounded-full ' src={categoryImages[item.slug]} alt="" />
                            </div>
                            <div className='flex gap-1 flex-col px-4 font-bold items-center'>
                                <h1 className='line-clamp-1'>{item.name}</h1>
                                
                            </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                })}
            </Swiper>
        </div>
    )
}

export default ProductCategories
