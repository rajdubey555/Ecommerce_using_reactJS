import axios from "axios"

export const singleProduct = async() => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products?limit=10')
        return response.data
    } catch (error) {
        console.log("Getting error while fetching data :", error)
        return null
    }
}

export const CategoryData = async(categoryName) => {
    try {
        const response = await axios.get(`https://fakestoreapi.com/products/category/${categoryName}?limit=100`)
        return response.data
    } catch (error) {
        console.log("Getting error while fetching data :", error)
        return null
    }
}