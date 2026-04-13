import React from "react";
import { useSelector } from "react-redux";
import PlaceOrderButton from "./PlaceOrderButton";

const PlaceOrder = () => {

  const cartItems = useSelector((state) => state.cart.cartItems);

  const shippingInfo = JSON.parse(localStorage.getItem("shippingInfo"));
  const paymentMethod = localStorage.getItem("paymentMethod");

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-center">
      
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-xl">

        <h2 className="text-2xl font-semibold mb-4 text-center">
          Confirm Order
        </h2>

        {/* Shipping */}
        <div className="mb-4">
          <h3 className="font-semibold">Shipping Details</h3>
          <p>{shippingInfo?.fullName}</p>
          <p>{shippingInfo?.address}</p>
          <p>{shippingInfo?.city}, {shippingInfo?.state}</p>
          <p>{shippingInfo?.pincode}</p>
          <p>{shippingInfo?.phone}</p>
        </div>

        {/* Payment */}
        <div className="mb-4">
          <h3 className="font-semibold">Payment Method</h3>
          <p>{paymentMethod}</p>
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