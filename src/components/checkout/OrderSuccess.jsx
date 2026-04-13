import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const OrderSuccess = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-gray-100 px-4">
      
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md w-full animate-fade-in">

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <FaCheckCircle className="text-green-500 text-6xl animate-bounce" />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-2 text-gray-800">
          Order Placed Successfully 🎉
        </h2>

        {/* Subtitle */}
        <p className="text-gray-500 mb-4">
          Thank you for your purchase!
        </p>

        {/* Order ID */}
        <div className="bg-gray-100 rounded-lg p-3 mb-6">
          <p className="text-sm text-gray-500">Order ID</p>
          <p className="text-blue-600 font-semibold break-all">
            {id || "N/A"}
          </p>
        </div>

        {/* Info */}
        <p className="text-gray-500 text-sm mb-6">
          Your order is being processed and will be delivered soon 🚚
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          
          <button
            onClick={() => navigate("/")}
            className="bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
          >
            Continue Shopping
          </button>

          <button
            onClick={() => navigate("/orders")}
            className="border border-gray-300 py-3 rounded-xl hover:bg-gray-100 transition"
          >
            View My Orders
          </button>

        </div>

      </div>
    </div>
  );
};

export default OrderSuccess;