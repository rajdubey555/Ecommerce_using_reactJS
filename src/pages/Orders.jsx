import React, { useEffect, useState } from "react";
import { BsBoxSeam } from "react-icons/bs";
import { Link } from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders.reverse()); // latest first
  }, []);

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 md:px-10" style={{ background: 'var(--bg)' }}>

      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center" style={{ color: 'var(--text)' }}>
        My Orders
      </h1>

      {orders.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-4 mt-16">
          <BsBoxSeam className="text-7xl" style={{ color: 'var(--text-subtle)' }} />
          <p className="text-lg font-semibold" style={{ color: 'var(--text-muted)' }}>No orders found 😢</p>
          <Link to="/products">
            <button className="px-6 py-2.5 rounded-xl font-semibold text-white hover:opacity-90 transition"
                    style={{ background: 'var(--primary)' }}>
              Start Shopping
            </button>
          </Link>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto space-y-5">

          {orders.map((order) => (
            <div
              key={order.id}
              className="p-5 sm:p-6 rounded-2xl shadow-sm border"
              style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
            >

              {/* HEADER */}
              <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
                <div>
                  <p className="font-semibold text-sm sm:text-base" style={{ color: 'var(--text)' }}>
                    Order ID: <span className="font-normal break-all" style={{ color: 'var(--text-muted)' }}>{order.id}</span>
                  </p>
                  <p className="text-xs sm:text-sm mt-0.5" style={{ color: 'var(--text-subtle)' }}>
                    {new Date(order.createdAt).toLocaleString()}
                  </p>
                </div>

                <span className="text-green-500 font-semibold text-base sm:text-lg">
                  ₹{order.totalPrice}
                </span>
              </div>

              {/* ITEMS */}
              <div className="border-t pt-3 space-y-2" style={{ borderColor: 'var(--border)' }}>
                {order.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between text-sm"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    <span className="truncate pr-4">{item.title} (x{item.quantity})</span>
                    <span className="shrink-0 font-medium" style={{ color: 'var(--text)' }}>₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              {/* FOOTER */}
              <div className="border-t pt-3 mt-3 flex flex-wrap justify-between gap-2 text-sm"
                   style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}>
                <span>Payment: <strong style={{ color: 'var(--text)' }}>{order.paymentMethod}</strong></span>
                <span>{order.shipping?.city}, {order.shipping?.state}</span>
              </div>

            </div>
          ))}

        </div>
      )}
    </div>
  );
};

export default Orders;