import { createSlice } from '@reduxjs/toolkit'

const getCartFromStorage = () =>{
    try {
        const data = localStorage.getItem("cart")
        return data ? JSON.parse(data) : []
    } catch (error) {
        console.log("error parsing cart: ",error);
        return []
    }
}

const initialState = {
    cartItems : getCartFromStorage()
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload

            //check item exits or not
            const existItem = state.cartItems.find((i) => i.id === item.id)

            if (existItem) {
                existItem.quantity += 1
            } else {
                state.cartItems.push({
                    ...item,
                    quantity: 1
                })
            }
        },
        removeCart: (state, action) => {
            const id = action.payload
            state.cartItems = state.cartItems.filter((item) => item.id != id)
        },
        incQty: (state, action) => {
            const id = action.payload
            const item = state.cartItems.find((i) => i.id === id)
            if (item) {
                item.quantity += 1
            }
        },
        decQty: (state, action) => {
            const id = action.payload
            const item = state.cartItems.find((i) => i.id === id)
            if (item && item.quantity>1) {
                item.quantity -= 1
            }
        }
    },
})

export const { addToCart, removeCart, incQty, decQty } = cartSlice.actions
export default cartSlice.reducer
