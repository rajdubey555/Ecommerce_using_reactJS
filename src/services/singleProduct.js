import axios from "axios"


const ProductUrl =`https://dummyjson.com/products`

const singleProduct = async (id) =>{
    try {
        const response = await axios.get(`${ProductUrl}/${id}`)
         console.log(response.data)
        return response.data
        
    } catch (error) {
        console.log("Getting error while fetching data :", error)
        
        throw error
    }
   
}


export default singleProduct
