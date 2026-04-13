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

    // ✅ CHANGE HERE
    navigate("/order-review");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 md:px-10">
      
      <h1 className="text-3xl font-bold mb-6 text-center">
        Checkout
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-md">
          
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">
            Shipping Details
          </h2>

          <ShippingForm onSubmit={handleShippingSubmit} />
        </div>    

      </div>
    </div>
  );
};

export default Checkout;