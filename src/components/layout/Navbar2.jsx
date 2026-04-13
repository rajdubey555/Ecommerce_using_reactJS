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
    <div className="flex justify-center items-center gap-5 text-xl font-bold text-[var(--text)]">

      {/* Home */}
      <Link to="/" className="flex items-center gap-1 hover:text-[var(--primary)]">
        <HouseHeartIcon />
        <span>Home</span>
      </Link>

      |

      {/* About */}
      <Link to="/about" className="flex items-center gap-1 hover:text-[var(--primary)]">
        <Info />
        <span>About</span>
      </Link>

      |

      {/* Contact */}
      <Link to="/contact" className="flex items-center gap-1 hover:text-[var(--primary)]">
        <CircleUserRound />
        <span>Contact</span>
      </Link>

      |

      {/* Cart */}
      <div className="relative">
        <Link to="/cart" className="flex items-center gap-1 hover:text-[var(--primary)]">
          <span>Cart</span>
          <ShoppingCart />
        </Link>

        {cartItems.length > 0 && (
          <span className="absolute -top-1 -right-3 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            {cartItems.length}
          </span>
        )}
      </div>

      |

      <Link to="/wishlist" className="flex items-center gap-1 hover:text-[var(--primary)]">
        <FaHeart color="red" />

      </Link>
      |

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="p-2 rounded-md 
                   bg-[var(--card)] 
                   border border-[var(--border)]
                   hover:bg-[var(--secondary)] transition"
      >
        {theme === "light" ? (
          <MdDarkMode size={20} />
        ) : (
          <MdLightMode size={20} />
        )}
      </button>

    </div>
  );
};
export default Navbar2
