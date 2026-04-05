import axios from "axios"
//Fetch Product
const ProductUrl ="https://dummyjson.com/products"

export const ProductData = async(limit = 15, skip = 0) => {
    try {
        const response = await axios.get(`${ProductUrl}?limit=${limit}&skip=${skip}`)
        return response.data
    } catch (error) {
        console.log("Getting error while fetching data :", error)
        throw error
    }
}



//Fetch Category
const categoryUrl = "https://dummyjson.com/products/categories"

export const CategoryShowData = async() => {
    try {
        const response = await axios.get(`${categoryUrl}`)
        return response.data
    } catch (error) {
        console.log("Getting error while fetching data :", error)
        throw error
    }
}

//fetch Category with Product 
export const CategoryProductData = async(name,limit=20) => {
    try {
        const response = await axios.get(`https://dummyjson.com/products/category/${name}?limit=${limit}`)
        return response.data
    } catch (error) {
        console.log("Getting error while fetching data :", error)
        throw error
    }
}

