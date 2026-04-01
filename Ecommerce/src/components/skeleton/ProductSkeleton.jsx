import React from 'react'
import Skeleton  from "react-loading-skeleton";
const ProductSkeleton = () => {
  return (
     <div className='bg-gray-100 h-60 w-50 m-2 rounded-3xl relative'>

           
            {/* Image Section */}
            <div className='h-[63%] rounded-3xl p-4'>
                <Skeleton  className='w-full h-full rounded-3xl' />
            </div>

            {/* Content Section */}
            <div className='flex gap-1 flex-col px-4 items-center'>

                {/* Title */}
                <Skeleton height={15} width={120} />

                {/* Price */}
                <Skeleton height={15} width={80} />

                {/* Buttons */}
                <div className='flex gap-2 justify-center mt-1'>
                    <Skeleton height={24} width={80} borderRadius={8} />
                    <Skeleton height={24} width={80} borderRadius={8} />
                </div>

            </div>
        </div>
  )
}

export default ProductSkeleton
