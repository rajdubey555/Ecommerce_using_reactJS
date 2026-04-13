import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const OrderReview = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();

  const shippingInfo = JSON.parse(localStorage.getItem("shippingInfo"));

  // ❗ Safety check
  if (!shippingInfo) {
    navigate("/checkout");
    return null;
  }

  // ✅ Price calculations
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 999 ? 0 : 99;
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 md:px-10">
      
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-6 text-center">
        Review Your Order
      </h1>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-6">

        {/* 🔥 SHIPPING DETAILS */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3 border-b pb-2">
            Shipping Address
          </h2>

          <div className="text-gray-700 space-y-1">
            <p><strong>Name:</strong> {shippingInfo.fullName}</p>
            <p><strong>Phone:</strong> {shippingInfo.phone}</p>
            <p><strong>Address:</strong> {shippingInfo.address}</p>
            <p>
              <strong>Location:</strong> {shippingInfo.city}, {shippingInfo.state} - {shippingInfo.pincode}
            </p>
          </div>
        </div>

        {/* 🔥 ITEMS */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3 border-b pb-2">
            Order Items
          </h2>

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center py-2 border-b"
            >
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-gray-500">
                  Qty: {item.quantity}
                </p>
              </div>

              <p className="font-semibold">
                ₹{Math.round(item.price * item.quantity)}
              </p>
            </div>
          ))}
        </div>

        {/* 🔥 PRICE DETAILS */}
        <div className="space-y-2 border-t pt-4">
          
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₹{Math.round(subtotal)}</span>
          </div>

          <div className="flex justify-between">
            <span>Shipping</span>
            <span>
              {shipping === 0 ? "Free" : `₹${shipping}`}
            </span>
          </div>

          <div className="flex justify-between">
            <span>Tax (5%)</span>
            <span>₹{tax}</span>
          </div>

          <div className="flex justify-between font-bold text-lg border-t pt-3">
            <span>Total</span>
            <span>₹{Math.round(total)}</span>
          </div>
        </div>

        {/* 🔥 BUTTON */}
        <button
          onClick={() => navigate("/payment")}
          className="w-full mt-6 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Continue to Payment →
        </button>

      </div>
    </div>
  );
};

export default OrderReview;