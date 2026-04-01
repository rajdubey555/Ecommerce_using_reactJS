import axios from "axios"

const ProductUrl ="https://dummyjson.com/products"

//Fetch All Products
export const allProductData = async(limit = 10, skip = 0) => {
    try {
        const response = await axios.get(`${ProductUrl}`)
        return response.data
    } catch (error) {
        console.log("Getting error while fetching data :", error)
        throw error
    }
}
