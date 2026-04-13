import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setFilter, setSortOptions } from "../../redux/features/productSlice";
import { FaFilter } from "react-icons/fa";
import useCategories from "../../hooks/useCategories";

const FilterBar = () => {
    const dispatch = useDispatch();

    const { categories } = useCategories()
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

    useEffect(() => {
        dispatch(setSortOptions(sort));
    }, [sort, dispatch]);

    const inputStyle = {
        background: 'var(--input-bg)',
        color: 'var(--text)',
        borderColor: 'var(--input-border)'
    };
    const inputClass = "rounded-lg px-2 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition w-full border";
    const labelClass = "text-xs font-medium mb-1";

    return (
        <div
            className="shadow-sm rounded-xl p-4 md:p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border"
            style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
        >
            {/* Left Title */}
            <div className="flex items-center gap-2 font-semibold text-base" style={{ color: 'var(--text)' }}>
                <FaFilter className="text-[var(--primary)]" />
                Filters &amp; Sorting
            </div>

            {/* Inputs */}
            <div className="grid grid-cols-2 sm:flex sm:flex-row gap-3 w-full md:w-auto sm:items-end">

                {/* Min Price */}
                <div className="flex flex-col w-full">
                    <label className={labelClass} style={{ color: 'var(--text-muted)' }}>Min Price</label>
                    <input
                        type="number"
                        placeholder="₹ 0"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                        className={`${inputClass} sm:w-24`}
                        style={inputStyle}
                    />
                </div>

                {/* Max Price */}
                <div className="flex flex-col w-full">
                    <label className={labelClass} style={{ color: 'var(--text-muted)' }}>Max Price</label>
                    <input
                        type="number"
                        placeholder="₹ 1000"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        className={`${inputClass} sm:w-24`}
                        style={inputStyle}
                    />
                </div>

                {/* Category */}
                <div className="flex flex-col w-full sm:w-48">
                    <label className={labelClass} style={{ color: 'var(--text-muted)' }}>Category</label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className={inputClass}
                        style={inputStyle}
                    >
                        <option value="">All Categories</option>
                        {categories.map((cat, index) => (
                            <option key={index} value={cat.slug}>{cat.name}</option>
                        ))}
                    </select>
                </div>

                {/* Sort */}
                <div className="flex flex-col w-full">
                    <label className={labelClass} style={{ color: 'var(--text-muted)' }}>Sort By</label>
                    <select
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                        className={inputClass}
                        style={inputStyle}
                    >
                        <option value="">Default</option>
                        <option value="lowToHigh">Price: Low to High</option>
                        <option value="highToLow">Price: High to Low</option>
                    </select>
                </div>

            </div>
        </div>
    );
};

export default FilterBar;
