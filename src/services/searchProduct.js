import axios from "axios"


const ProductUrl = `https://dummyjson.com/products`

const searchProduct = async (query) => {
    try {
        if (!query.trim()) return []
        const response = await axios.get(`${ProductUrl}/search?q=${query}`)
        return response.data
    } catch (error) {
        console.log("Getting erro while fetching products :", error.message);
        throw error


    }
}
export default searchProduct 