import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import dowPlayStore from "../../assets/button/dowPlayStore.png";
import dowAppStore from "../../assets/button/dowAppStore.png";


const Footer = () => {
  return (
<div className="bg-[var(--footer-bg)] text-[var(--footer-text)] w-full">
      <div className="flex flex-wrap py-6">

        {/* LEFT */}
        <div className="w-full md:w-1/3 flex flex-col gap-3 px-10">
          <h1 className="text-3xl font-bold text-[var(--footer-text)]">
            RajCoder
          </h1>

          <h3 className="text-[20px] font-semibold text-[var(--footer-text)]">
            Contact us
          </h3>

          {/* Whatsapp */}
          <div className="flex items-center gap-2">
            <FaWhatsapp size={20} className="text-[var(--footer-text)]" />
            <div className="flex flex-col text-[var(--footer-text)] text-sm">
              <h3 className="font-medium">Whatsapp</h3>
              <h2 className="text-xs tracking-widest">
                +91 7878787888
              </h2>
            </div>
          </div>

          {/* Call */}
          <div className="flex items-center gap-2">
            <IoCall size={20} className="text-[var(--footer-text)]" />
            <div className="flex flex-col text-[var(--footer-text)] text-sm">
              <h3 className="font-medium">Call us</h3>
              <h2 className="text-xs tracking-widest">
                +91 7878787888
              </h2>
            </div>
          </div>

          {/* App Download */}
          <div className="flex flex-col gap-2">
            <h1 className="text-sm font-bold text-[var(--footer-text)]">
              Download App
            </h1>

            <div className="flex gap-2">
              <button className="w-28 hover:scale-105 transition">
                <img src={dowPlayStore} alt="Play Store" />
              </button>
              <button className="w-28 hover:scale-105 transition">
                <img src={dowAppStore} alt="App Store" />
              </button>
            </div>
          </div>
        </div>

        {/* MIDDLE */}
        <div className="w-full md:w-1/3 flex flex-col gap-2 px-10 mt-6 md:mt-0">
          <h1 className="border-b border-[var(--footer-text)] pb-1 text-[var(--footer-text)] text-lg">
            Most Popular Category
          </h1>

          <ul className="list-disc pl-6 text-[var(--footer-text)] text-sm">
            <li>Staples</li>
            <li>Beverages</li>
            <li>Personal Care</li>
            <li>Home Care</li>
            <li>Baby Care</li>
            <li>Vegetable & Fruits</li>
            <li>Snacks & Foods</li>
            <li>Dairy & Bakery</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="w-full md:w-1/3 flex flex-col gap-2 px-10 mt-6 md:mt-0">
          <h1 className="border-b border-[var(--footer-text)] pb-1 text-[var(--footer-text)] text-lg">
            Most Popular Category
          </h1>

          <ul className="list-disc pl-6 text-[var(--footer-text)] text-sm">
            <li>Staples</li>
            <li>Beverages</li>
            <li>Personal Care</li>
            <li>Home Care</li>
            <li>Baby Care</li>
            <li>Vegetable & Fruits</li>
            <li>Snacks & Foods</li>
            <li>Dairy & Bakery</li>
          </ul>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-[var(--footer-text)] py-3 text-center text-sm font-medium text-[var(--footer-text)]">
        © 2026 All rights reserved. Raj Coder.
      </div>

    </div>
  );
};

export default Footer
