import React, { useContext } from 'react'
import { HouseHeartIcon, ShoppingCart, CircleUserRound, Info } from 'lucide-react';
import { Link } from "react-router-dom";
import { ThemeContext } from '../../context/ThemeContext';
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useSelector } from 'react-redux';
import { FaHeart } from "react-icons/fa";

const Navbar2 = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className="flex flex-wrap justify-center items-center gap-3 md:gap-5 text-base md:text-xl font-bold text-[var(--text)]">

      {/* Home */}
      <Link to="/" className="flex items-center gap-1 hover:text-[var(--primary)]">
        <HouseHeartIcon className="w-5 h-5 md:w-6 md:h-6" />
        <span className="hidden md:inline">Home</span>
      </Link>

      <span className="hidden md:inline">|</span>

      {/* About */}
      <Link to="/about" className="flex items-center gap-1 hover:text-[var(--primary)]">
        <Info className="w-5 h-5 md:w-6 md:h-6" />
        <span className="hidden md:inline">About</span>
      </Link>

      <span className="hidden md:inline">|</span>

      {/* Contact */}
      <Link to="/contact" className="flex items-center gap-1 hover:text-[var(--primary)]">
        <CircleUserRound className="w-5 h-5 md:w-6 md:h-6" />
        <span className="hidden md:inline">Contact</span>
      </Link>

      <span className="hidden md:inline">|</span>

      {/* Cart */}
      <div className="relative">
        <Link to="/cart" className="flex items-center gap-1 hover:text-[var(--primary)]">
          <span className="hidden md:inline">Cart</span>
          <ShoppingCart className="w-5 h-5 md:w-6 md:h-6" />
        </Link>

        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-3 md:-top-1 md:-right-3 bg-red-500 text-white text-[10px] md:text-xs w-4 h-4 md:w-5 md:h-5 flex items-center justify-center rounded-full">
            {cartItems.length}
          </span>
        )}
      </div>

      <span className="hidden md:inline">|</span>

      <Link to="/wishlist" className="flex items-center gap-1 hover:text-[var(--primary)] text-xl">
        <FaHeart color="red" />
      </Link>

      <span className="hidden md:inline">|</span>

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="p-1 md:p-2 rounded-md 
                   bg-[var(--card)] 
                   border border-[var(--border)]
                   hover:bg-[var(--secondary)] transition"
      >
        {theme === "light" ? (
          <MdDarkMode className="w-5 h-5 md:w-6 md:h-6" />
        ) : (
          <MdLightMode className="w-5 h-5 md:w-6 md:h-6" />
        )}
      </button>

    </div>
  );
};
export default Navbar2
