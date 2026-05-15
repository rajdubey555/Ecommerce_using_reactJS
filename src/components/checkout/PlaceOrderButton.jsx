import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeCart } from "../../redux/features/cartSlice";

const PlaceOrderButton = ({ cartItems, shippingInfo, paymentMethod }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlePlaceOrder = async () => {

    if (!cartItems || cartItems.length === 0) {
      alert("Cart is empty");
      return;
    }

    if (!shippingInfo) {
      alert("Shipping details missing");
      return;
    }

    if (!paymentMethod) {
      alert("Select payment method");
      return;
    }

    try {
      setLoading(true);

      const orderData = {
        id: Date.now(),
        items: cartItems,
        shipping: shippingInfo,
        paymentMethod,
        totalPrice: cartItems.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        ),
        createdAt: new Date().toISOString(),
      };

      console.log("Order Saved:", orderData);

      const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
      existingOrders.push(orderData);
      localStorage.setItem("orders", JSON.stringify(existingOrders));

      localStorage.removeItem("cart");
      dispatch(removeCart());

      navigate(`/order-success/${orderData.id}`);

    } catch (error) {
      console.error("Order Error:", error);
      alert("Failed to place order");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handlePlaceOrder}
      disabled={loading}
      className="w-full py-3 rounded-xl text-white font-semibold transition duration-300"
      style={{
        background: loading ? 'var(--border-strong)' : '#16a34a',
        cursor: loading ? 'not-allowed' : 'pointer',
        opacity: loading ? 0.7 : 1,
      }}
    >
      {loading ? "Placing Order..." : "🛒 Place Order"}
    </button>
  );
};

export default PlaceOrderButton;