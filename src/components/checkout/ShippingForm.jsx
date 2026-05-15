import React from "react";
import useShippingForm from "../../hooks/useShippingForm";

const inputStyle = {
  background: 'var(--input-bg)',
  color: 'var(--text)',
  borderColor: 'var(--input-border)',
};

const labelStyle = { color: 'var(--text-muted)' };

const ShippingForm = ({ onSubmit }) => {
  const { formData, errors, handleChange, handleSubmit } =
    useShippingForm(onSubmit);

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      {/* Full Name */}
      <div>
        <label className="block text-sm font-medium mb-1" style={labelStyle}>Full Name</label>
        <input
          type="text"
          name="fullName"
          placeholder="Enter your name"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full border p-2.5 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition"
          style={inputStyle}
        />
        {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
      </div>

      {/* Phone + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1" style={labelStyle}>Phone</label>
          <input
            type="text"
            name="phone"
            placeholder="10-digit number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border p-2.5 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition"
            style={inputStyle}
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" style={labelStyle}>Email</label>
          <input
            type="text"
            name="email"
            placeholder="example@gmail.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2.5 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition"
            style={inputStyle}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
      </div>

      {/* Address */}
      <div>
        <label className="block text-sm font-medium mb-1" style={labelStyle}>Address</label>
        <textarea
          name="address"
          placeholder="House no, street, area..."
          value={formData.address}
          onChange={handleChange}
          rows={3}
          className="w-full border p-2.5 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition"
          style={inputStyle}
        />
        {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
      </div>

      {/* City + State */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1" style={labelStyle}>City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full border p-2.5 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition"
            style={inputStyle}
          />
          {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" style={labelStyle}>State</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="w-full border p-2.5 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition"
            style={inputStyle}
          />
          {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
        </div>
      </div>

      {/* Pincode + Country */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1" style={labelStyle}>Pincode</label>
          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            className="w-full border p-2.5 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition"
            style={inputStyle}
          />
          {errors.pincode && <p className="text-red-500 text-sm mt-1">{errors.pincode}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" style={labelStyle}>Country</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            disabled
            className="w-full border p-2.5 rounded-lg cursor-not-allowed opacity-60"
            style={{ ...inputStyle, background: 'var(--bg-secondary)' }}
          />
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full py-3 rounded-xl text-white font-semibold hover:opacity-90 hover:scale-[1.01] transition"
        style={{ background: 'var(--primary)' }}
      >
        Continue to Review →
      </button>

    </form>
  );
};

export default ShippingForm;