import Skeleton from "react-loading-skeleton"


const SkeletonGrid = ({ count = 8, Component }) => {
    return (
        <div>
            <div className='flex  justify-center'>
                <Skeleton className='text-2xl font-bold px-5 items-center  text-gray-600 '></Skeleton>
            </div>

        <div className="flex flex-wrap justify-center ">
            {Array.from({ length: count }).map((_,i) => (
                <Component key={`skeleton-${i}`} />
            ))}
        </div>
        </div>
    )
}

export default SkeletonGrid
