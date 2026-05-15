import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const OrderSuccess = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10"
         style={{ background: 'var(--bg)' }}>

      <div className="p-7 sm:p-8 rounded-2xl shadow-xl border text-center w-full max-w-md"
           style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <FaCheckCircle className="text-green-500 text-6xl animate-bounce" />
        </div>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-bold mb-2" style={{ color: 'var(--text)' }}>
          Order Placed Successfully 🎉
        </h2>

        {/* Subtitle */}
        <p className="mb-4" style={{ color: 'var(--text-muted)' }}>
          Thank you for your purchase!
        </p>

        {/* Order ID */}
        <div className="rounded-lg p-3 mb-6" style={{ background: 'var(--bg-secondary)' }}>
          <p className="text-sm" style={{ color: 'var(--text-subtle)' }}>Order ID</p>
          <p className="font-semibold break-all text-sm" style={{ color: 'var(--primary)' }}>
            {id || "N/A"}
          </p>
        </div>

        {/* Info */}
        <p className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
          Your order is being processed and will be delivered soon 🚚
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-3">

          <button
            onClick={() => navigate("/")}
            className="py-3 rounded-xl text-white font-semibold hover:opacity-90 transition"
            style={{ background: 'var(--primary)' }}
          >
            Continue Shopping
          </button>

          <button
            onClick={() => navigate("/orders")}
            className="py-3 rounded-xl font-semibold border hover:opacity-80 transition"
            style={{ borderColor: 'var(--border)', color: 'var(--text)', background: 'var(--bg-secondary)' }}
          >
            View My Orders
          </button>

        </div>

      </div>
    </div>
  );
};

export default OrderSuccess;