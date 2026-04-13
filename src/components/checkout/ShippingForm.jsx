import React from "react";
import useShippingForm from "../../hooks/useShippingForm";

const ShippingForm = ({ onSubmit }) => {
  const { formData, errors, handleChange, handleSubmit } =
    useShippingForm(onSubmit);

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-6">

      {/* Header */}
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">
        Shipping Details
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium">Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter your name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm">{errors.fullName}</p>
          )}
        </div>

        {/* Phone + Email */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm">Phone</label>
            <input
              type="text"
              name="phone"
              placeholder="10-digit number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>

          <div>
            <label className="text-sm">Email</label>
            <input
              type="text"
              name="email"
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
        </div>

        {/* Address */}
        <div>
          <label className="text-sm">Address</label>
          <textarea
            name="address"
            placeholder="House no, street, area..."
            value={formData.address}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
          />
          {errors.address && (
            <p className="text-red-500 text-sm">{errors.address}</p>
          )}
        </div>

        {/* City + State */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
            />
            {errors.city && (
              <p className="text-red-500 text-sm">{errors.city}</p>
            )}
          </div>

          <div>
            <label className="text-sm">State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
            />
            {errors.state && (
              <p className="text-red-500 text-sm">{errors.state}</p>
            )}
          </div>
        </div>

        {/* Pincode + Country */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm">Pincode</label>
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
            />
            {errors.pincode && (
              <p className="text-red-500 text-sm">{errors.pincode}</p>
            )}
          </div>

          <div>
            <label className="text-sm">Country</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              disabled
              className="w-full border p-2 rounded-lg mt-1 bg-gray-100"
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition font-semibold"
        >
          Continue to Review →
        </button>

      </form>
    </div>
  );
};

export default ShippingForm;