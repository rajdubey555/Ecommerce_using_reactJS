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

    // 👉 NEXT PAGE
    navigate("/place-order");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        
        <h2 className="text-2xl font-semibold text-center mb-6">
          Select Payment Method
        </h2>

        <div className="space-y-4">
          
          <label className={`flex items-center p-4 border rounded-xl cursor-pointer 
            ${paymentMethod === "COD" ? "border-blue-500 bg-blue-50" : ""}`}>
            <input
              type="radio"
              checked={paymentMethod === "COD"}
              onChange={() => setPaymentMethod("COD")}
              className="mr-3"
            />
            Cash on Delivery
          </label>

          <label className={`flex items-center p-4 border rounded-xl cursor-pointer 
            ${paymentMethod === "ONLINE" ? "border-blue-500 bg-blue-50" : ""}`}>
            <input
              type="radio"
              checked={paymentMethod === "ONLINE"}
              onChange={() => setPaymentMethod("ONLINE")}
              className="mr-3"
            />
            Online Payment (UPI/Card)
          </label>

        </div>

        <button
          onClick={handleContinue}
          className="w-full mt-6 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700"
        >
          Continue →
        </button>

      </div>
    </div>
  );
};

export default PaymentMethod;