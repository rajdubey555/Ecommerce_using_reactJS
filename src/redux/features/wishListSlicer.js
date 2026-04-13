import { createSlice } from "@reduxjs/toolkit";

const getWishlist = () => {
    try {
        const data = localStorage.getItem("wishlist")
        return data ? JSON.parse(data) : []
    } catch (error) {
        console.log("error parsing whislist: ", error);
        throw error
    }
}

const initialState = {
    items: getWishlist()
}

export const wishListSlicer = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {

        toggleWishlist: (state, action) => {

            const item = action.payload
            const exists = state.items.find((i) => i.id === item.id)

            if (exists) {
               state.items= state.items.filter((i) => i.id !== item.id)
            } else {
                state.items.push(item)
            }
        }

    }
})

export const { toggleWishlist } = wishListSlicer.actions
export default wishListSlicer.reducer