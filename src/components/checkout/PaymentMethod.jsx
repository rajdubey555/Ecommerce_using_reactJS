import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentMethod = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem("paymentMethod");
    if (saved) setPaymentMethod(saved);
  }, []);

  const handleContinue = () => {
    if (!paymentMethod) {
      alert("Select payment method");
      return;
    }
    localStorage.setItem("paymentMethod", paymentMethod);
    navigate("/place-order");
  };

  const optionStyle = (value) => ({
    background: paymentMethod === value ? 'var(--bg-secondary)' : 'var(--card)',
    borderColor: paymentMethod === value ? 'var(--primary)' : 'var(--border)',
    color: 'var(--text)',
  });

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10"
         style={{ background: 'var(--bg)' }}>

      <div className="w-full max-w-md rounded-2xl shadow-sm border p-6"
           style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>

        <h2 className="text-xl sm:text-2xl font-semibold text-center mb-6" style={{ color: 'var(--text)' }}>
          Select Payment Method
        </h2>

        <div className="space-y-4">

          <label
            className="flex items-center p-4 border rounded-xl cursor-pointer transition"
            style={optionStyle("COD")}
          >
            <input
              type="radio"
              checked={paymentMethod === "COD"}
              onChange={() => setPaymentMethod("COD")}
              className="mr-3 accent-blue-600"
            />
            💵 Cash on Delivery
          </label>

          <label
            className="flex items-center p-4 border rounded-xl cursor-pointer transition"
            style={optionStyle("ONLINE")}
          >
            <input
              type="radio"
              checked={paymentMethod === "ONLINE"}
              onChange={() => setPaymentMethod("ONLINE")}
              className="mr-3 accent-blue-600"
            />
            💳 Online Payment (UPI/Card)
          </label>

        </div>

        <button
          onClick={handleContinue}
          className="w-full mt-6 py-3 rounded-xl text-white font-semibold hover:opacity-90 transition"
          style={{ background: 'var(--primary)' }}
        >
          Continue →
        </button>

      </div>
    </div>
  );
};

export default PaymentMethod;