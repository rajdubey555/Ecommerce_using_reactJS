import React from "react";
import { useSelector } from "react-redux";
import PlaceOrderButton from "./PlaceOrderButton";

const PlaceOrder = () => {

  const cartItems = useSelector((state) => state.cart.cartItems);

  const shippingInfo = JSON.parse(localStorage.getItem("shippingInfo"));
  const paymentMethod = localStorage.getItem("paymentMethod");

  return (
    <div className="min-h-screen flex justify-center items-center px-4 py-10"
         style={{ background: 'var(--bg)' }}>

      <div className="p-6 sm:p-8 rounded-2xl shadow-sm border w-full max-w-xl"
           style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>

        <h2 className="text-xl sm:text-2xl font-semibold mb-5 text-center" style={{ color: 'var(--text)' }}>
          Confirm Order
        </h2>

        {/* Shipping */}
        <div className="mb-5 p-4 rounded-xl border" style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border)' }}>
          <h3 className="font-semibold mb-2" style={{ color: 'var(--text)' }}>📦 Shipping Details</h3>
          <div className="space-y-1 text-sm" style={{ color: 'var(--text-muted)' }}>
            <p>{shippingInfo?.fullName}</p>
            <p>{shippingInfo?.address}</p>
            <p>{shippingInfo?.city}, {shippingInfo?.state}</p>
            <p>{shippingInfo?.pincode}</p>
            <p>{shippingInfo?.phone}</p>
          </div>
        </div>

        {/* Payment */}
        <div className="mb-6 p-4 rounded-xl border" style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border)' }}>
          <h3 className="font-semibold mb-1" style={{ color: 'var(--text)' }}>💳 Payment Method</h3>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{paymentMethod}</p>
        </div>

        {/* Button */}
        <PlaceOrderButton
          cartItems={cartItems}
          shippingInfo={shippingInfo}
          paymentMethod={paymentMethod}
        />

      </div>
    </div>
  );
};

export default PlaceOrder;