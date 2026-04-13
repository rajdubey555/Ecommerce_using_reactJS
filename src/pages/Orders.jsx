import React, { useEffect, useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders.reverse()); // latest first
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 md:px-10">

      <h1 className="text-3xl font-bold mb-6 text-center">
        My Orders
      </h1>

      {orders.length === 0 ? (
        <p className="text-center text-gray-500">
          No orders found 😢
        </p>
      ) : (
        <div className="max-w-4xl mx-auto space-y-6">

          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white p-6 rounded-2xl shadow-md"
            >

              {/* 🔥 HEADER */}
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="font-semibold">
                    Order ID: {order.id}
                  </p>
                  <p className="text-sm text-gray-500">
                    {new Date(order.createdAt).toLocaleString()}
                  </p>
                </div>

                <span className="text-green-600 font-semibold">
                  ₹{order.totalPrice}
                </span>
              </div>

              {/* 🔥 ITEMS */}
              <div className="border-t pt-3 space-y-2">
                {order.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between text-sm"
                  >
                    <span>
                      {item.title} (x{item.quantity})
                    </span>
                    <span>
                      ₹{item.price * item.quantity}
                    </span>
                  </div>
                ))}
              </div>

              {/* 🔥 FOOTER */}
              <div className="border-t pt-3 mt-3 flex justify-between text-sm text-gray-600">
                <span>Payment: {order.paymentMethod}</span>
                <span>
                  {order.shipping?.city}, {order.shipping?.state}
                </span>
              </div>

            </div>
          ))}

        </div>
      )}
    </div>
  );
};

export default Orders;