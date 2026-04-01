import React from 'react'
import { useSelector } from 'react-redux';

const search = () => {
    const handleAddToCart = (product) => {
            dispatch(addToCart(product));
            showSuccess("Product added to cart 🛒");
        };
          const { results, loading, error } = useSelector((state) => state.search)

  return (
    <div className='mt-5 mb-5 '>
            <div className='flex  justify-center'>
                <h1 className='text-2xl font-bold px-5 items-center  text-gray-600 '>{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
            </div>
            <div
                className=" mt-1 pl-4 flex flex-wrap justify-center"
            >
                {results.map((elem) => (
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

export default search
