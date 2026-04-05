import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from "../../redux/features/cartSlice";
import { showSuccess } from "../../utils/toast";
import { Link } from 'react-router-dom';
import { BsCart4 } from 'react-icons/bs';

const ProductCard = ({ product, onAddToCart }) => {

  const dispatch = useDispatch()
  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product)   // custom behavior
    } else {
      dispatch(addToCart(product))  // default behavior
      showSuccess(<span className="flex items-center gap-2">
            {product.title} added <BsCart4 />
        </span>);
    }
  }

  return (
    <div className="bg-[var(--card)] border border-[var(--border)] 
                    h-64 mt-3 w-full max-w-[250px] 
                    rounded-2xl shadow-sm 
                    hover:shadow-lg hover:scale-105 
                    transition duration-300 relative">
      <Link to={`/product/${product.id}`}>
        {/* Discount Badge */}
        <div className="absolute top-0 right-0 
                      bg-[var(--primary)] text-white 
                      text-xs font-bold px-2 py-1 
                      rounded-bl-lg">
          {Math.round(product.discountPercentage)}% OFF
        </div>

        {/* Image */}
        <div className="h-[60%] p-3">
          <img
            className="w-full h-full object-contain"
            src={product?.images?.[0]}
            alt={product.title}
          />
        </div>
      </Link>
      {/* Content */}
      <div className="flex flex-col px-3 items-center gap-1 text-[var(--text)]">

        <h1 className="line-clamp-1 text-sm font-semibold">
          {product.title}
        </h1>

        <h3 className="text-sm">
          ₹{Math.round(product.price)}
        </h3>

        {/* Buttons */}
        <div className="flex gap-2 mt-1">

          <button className="px-3 py-1 text-xs rounded-md 
                             bg-[var(--primary)] text-white 
                             hover:opacity-90 active:scale-95 transition">
            Buy Now
          </button>

          <button
            onClick={handleAddToCart}
            className="px-3 py-1 text-xs rounded-md 
                       border border-[var(--border)] 
                       text-white
                       bg-[var(--primary)]
                       hover:bg- 
                       active:scale-95 transition"
          >
            Add To Cart
          </button>

        </div>
      </div>
    </div>
  );
}

export default ProductCard
