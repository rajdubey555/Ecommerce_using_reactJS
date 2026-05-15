import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const OrderReview = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();

  const shippingInfo = JSON.parse(localStorage.getItem("shippingInfo"));

  if (!shippingInfo) {
    navigate("/checkout");
    return null;
  }

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 999 ? 0 : 99;
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 md:px-10" style={{ background: 'var(--bg)' }}>

      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center" style={{ color: 'var(--text)' }}>
        Review Your Order
      </h1>

      <div className="max-w-4xl mx-auto rounded-2xl shadow-sm border p-5 sm:p-6"
           style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>

        {/* SHIPPING DETAILS */}
        <div className="mb-6">
          <h2 className="text-lg sm:text-xl font-semibold mb-3 border-b pb-2"
              style={{ color: 'var(--text)', borderColor: 'var(--border)' }}>
            Shipping Address
          </h2>

          <div className="space-y-1 text-sm sm:text-base" style={{ color: 'var(--text-muted)' }}>
            <p><strong style={{ color: 'var(--text)' }}>Name:</strong> {shippingInfo.fullName}</p>
            <p><strong style={{ color: 'var(--text)' }}>Phone:</strong> {shippingInfo.phone}</p>
            <p><strong style={{ color: 'var(--text)' }}>Address:</strong> {shippingInfo.address}</p>
            <p>
              <strong style={{ color: 'var(--text)' }}>Location:</strong> {shippingInfo.city}, {shippingInfo.state} - {shippingInfo.pincode}
            </p>
          </div>
        </div>

        {/* ITEMS */}
        <div className="mb-6">
          <h2 className="text-lg sm:text-xl font-semibold mb-3 border-b pb-2"
              style={{ color: 'var(--text)', borderColor: 'var(--border)' }}>
            Order Items
          </h2>

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center py-2.5 border-b"
              style={{ borderColor: 'var(--border)' }}
            >
              <div>
                <p className="font-medium text-sm sm:text-base" style={{ color: 'var(--text)' }}>{item.title}</p>
                <p className="text-xs sm:text-sm" style={{ color: 'var(--text-muted)' }}>Qty: {item.quantity}</p>
              </div>

              <p className="font-semibold text-sm sm:text-base" style={{ color: 'var(--text)' }}>
                ₹{Math.round(item.price * item.quantity)}
              </p>
            </div>
          ))}
        </div>

        {/* PRICE DETAILS */}
        <div className="space-y-2 border-t pt-4" style={{ borderColor: 'var(--border)' }}>

          <div className="flex justify-between text-sm" style={{ color: 'var(--text-muted)' }}>
            <span>Subtotal</span>
            <span>₹{Math.round(subtotal)}</span>
          </div>

          <div className="flex justify-between text-sm" style={{ color: 'var(--text-muted)' }}>
            <span>Shipping</span>
            <span>{shipping === 0 ? <span className="text-green-500 font-medium">FREE</span> : `₹${shipping}`}</span>
          </div>

          <div className="flex justify-between text-sm" style={{ color: 'var(--text-muted)' }}>
            <span>Tax (5%)</span>
            <span>₹{tax}</span>
          </div>

          <div className="flex justify-between font-bold text-base sm:text-lg border-t pt-3"
               style={{ color: 'var(--text)', borderColor: 'var(--border)' }}>
            <span>Total</span>
            <span>₹{Math.round(total)}</span>
          </div>
        </div>

        {/* BUTTON */}
        <button
          onClick={() => navigate("/payment")}
          className="w-full mt-6 py-3 rounded-xl text-white font-semibold hover:opacity-90 transition"
          style={{ background: 'var(--primary)' }}
        >
          Continue to Payment →
        </button>

      </div>
    </div>
  );
};

export default OrderReview;