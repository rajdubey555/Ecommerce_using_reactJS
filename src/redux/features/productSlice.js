import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allProducts: [],
    products: [],
    filters: {
        minPrice: "",
        maxPrice: "",
        category: ""
    },
    sortOptions: ""
};

const applyFiltersAndSort = (state) => {
    let filtered = [...state.allProducts];

    if (state.filters.category) {
        filtered = filtered.filter(
            (p) => p.category === state.filters.category
        );
    }

    if (state.filters.minPrice) {
        filtered = filtered.filter(
            (p) => p.price >= Number(state.filters.minPrice)
        );
    }

    if (state.filters.maxPrice) {
        filtered = filtered.filter(
            (p) => p.price <= Number(state.filters.maxPrice)
        );
    }

    if (state.sortOptions === "lowToHigh") {
        filtered.sort((a, b) => a.price - b.price);
    }

    if (state.sortOptions === "highToLow") {
        filtered.sort((a, b) => b.price - a.price);
    }

    state.products = filtered;
};

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {

        setProducts: (state, action) => {
            state.allProducts = action.payload;
            state.products = action.payload;
        },

        setFilter: (state, action) => {
            state.filters = action.payload;
            applyFiltersAndSort(state);
        },

        setSortOptions: (state, action) => {
            state.sortOptions = action.payload;
            applyFiltersAndSort(state);
        },


    }
});

export const { setProducts, setFilter, setSortOptions } = productSlice.actions;
export default productSlice.reducer;