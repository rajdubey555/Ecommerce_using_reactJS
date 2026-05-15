import React, { useState } from "react";
import ShippingForm from "../components/checkout/ShippingForm";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [shippingInfo, setShippingInfo] = useState(null);
  const navigate = useNavigate();

  const handleShippingSubmit = (data) => {
    setShippingInfo(data);
    localStorage.setItem("shippingInfo", JSON.stringify(data));
    navigate("/order-review");
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 md:px-10" style={{ background: 'var(--bg)' }}>

      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center" style={{ color: 'var(--text)' }}>
        Checkout
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">

        <div className="lg:col-span-2 p-5 sm:p-6 rounded-2xl shadow-sm border"
             style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>

          <h2 className="text-lg sm:text-xl font-semibold mb-4 border-b pb-2"
              style={{ color: 'var(--text)', borderColor: 'var(--border)' }}>
            Shipping Details
          </h2>

          <ShippingForm onSubmit={handleShippingSubmit} />
        </div>

      </div>
    </div>
  );
};

export default Checkout;