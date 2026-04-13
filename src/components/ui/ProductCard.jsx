import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from "../../redux/features/cartSlice";
import { showSuccess } from "../../utils/toast";
import { Link } from 'react-router-dom';
import { BsCart4 } from 'react-icons/bs';
import { FaHeart, FaRupeeSign } from "react-icons/fa";
import { toggleWishlist } from '../../redux/features/wishListSlicer';

const ProductCard = ({ product, onAddToCart, ontoggleWishlist }) => {

  const dispatch = useDispatch()
  const wishlist = useSelector((state) => state.wishlist.items || [])
  const isWishlisted = wishlist.some((i) => i.id === product.id);
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

  const handleAddToWishlist = () => {
    if (ontoggleWishlist) {
      ontoggleWishlist(product)   // custom behavior
    } else {
      dispatch(toggleWishlist(product))  // default behavior
      showSuccess(<span className="flex items-center gap-2">
        {isWishlisted ? "Removed from" : "Added to"} Wishlist
        <FaHeart color="red" />
      </span>);
    }
  }

  return (
    <div className="bg-[var(--card)] border border-[var(--border)] 
                    w-full rounded-2xl shadow-sm 
                    hover:shadow-lg hover:scale-105 
                    transition duration-300 relative
                    flex flex-col pb-3">

      {/* Discount Badge */}
      <div className="absolute top-0 left-0 
                      bg-[var(--primary)] text-white 
                      text-xs font-bold px-2 py-1 
                      rounded-br-lg z-10">
        {Math.round(product.discountPercentage)}% OFF
      </div>

      <div onClick={handleAddToWishlist}
        className="absolute top-1 right-1  
                     text-black 
                      text-xl font-bold px-2 py-1
                      rounded-full hover:text-red-600 z-10 cursor-pointer">
        {<FaHeart color={isWishlisted ? "red" : "black"} />}
      </div>
      
      <Link to={`/product/${product.id}`}>
        {/* Image */}
        <div className="h-36 p-3">
          <img
            className="w-full h-full object-contain"
            src={product?.images?.[0]}
            alt={product.title}
          />
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-col px-2 items-center gap-1 text-[var(--text)] flex-1 justify-end">

        <h1 className="line-clamp-1 text-xs font-semibold text-center w-full">
          {product.title}
        </h1>

        <h3 className="text-xs flex justify-center items-center font-medium">
          <FaRupeeSign className="text-[10px]" />{Math.round(product.price)}
        </h3>

        {/* Buttons */}
        <div className="flex gap-1 mt-1 w-full px-1">

          <button className="flex-1 py-1 text-[10px] rounded-md 
                             bg-[var(--primary)] text-white 
                             hover:opacity-90 active:scale-95 transition truncate">
            Buy Now
          </button>

          <button
            onClick={handleAddToCart}
            className="flex-1 py-1 text-[10px] rounded-md 
                       border border-[var(--border)] 
                       text-white
                       bg-[var(--primary)]
                       active:scale-95 transition truncate"
          >
            Add Cart
          </button>

        </div>
      </div>
    </div>
  );
}

export default ProductCard
