import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, setSortOptions } from "../../redux/features/productSlice";
import { FaFilter } from "react-icons/fa";
import useCategories from "../../hooks/useCategories";

const FilterBar = () => {
    const dispatch = useDispatch();
        // const allProducts = useSelector((state) => state.products.allProducts);

    const { categories} = useCategories()
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [sort, setSort] = useState("");
    const [category, setCategory] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(setFilter({ minPrice, maxPrice, category }));
        }, 300);

        return () => clearTimeout(timer);
    }, [minPrice, maxPrice, category, dispatch]);

    // âœ… Sort instant
    useEffect(() => {
        dispatch(setSortOptions(sort));
    }, [sort, dispatch]);

    return (
        <div className="bg-white shadow-md rounded-xl p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            {/* Left Title */}
            <div className="flex items-center gap-2 text-gray-700 font-semibold text-lg">
                <FaFilter className="text-blue-500" />
                Filters & Sorting
            </div>

            {/* Inputs */}
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">

                {/* Min Price */}
                <div className="flex flex-col">
                    <label className="text-sm text-gray-500 mb-1">Min Price</label>
                    <input
                        type="number"
                        placeholder="â‚¹ 0"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    />
                </div>

                {/* Max Price */}
                <div className="flex flex-col">
                    <label className="text-sm text-gray-500 mb-1">Max Price</label>
                    <input
                        type="number"
                        placeholder="â‚¹ 1000"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    />
                </div>

                {/* Category */}
  <div className="flex flex-col w-48">
    <label className="text-sm font-medium text-gray-600 mb-1">
      Category
    </label>
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="border border-gray-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
    >
      <option value="">All Categories</option>

      {categories.map((cat, index) => (
        <option key={index} value={cat.slug}>
          {cat.name}
        </option>
      ))}
    </select>
  </div>

                {/* Sort */}
                <div className="flex flex-col">
                    <label className="text-sm text-gray-500 mb-1">Sort By</label>
                    <select
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    >
                        <option value="">Default</option>
                        <option value="lowToHigh">Price: Low â†’ High</option>
                        <option value="highToLow">Price: High â†’ Low</option>
                    </select>
                </div>

            </div>
        </div>
    );
};

export default FilterBar;
