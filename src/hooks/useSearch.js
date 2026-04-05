import { useEffect, useState } from "react"
import searchProduct from "../services/searchProduct"



const useSearch = (query) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
if (!query) return;
        const fetchProducts = async () => {
            try {
                setLoading(true)
                setError(null)
                const data = await searchProduct(query)
                setProducts(data.products)  
            } catch (error) {
                setError(error.message || "something went Wrong")
            } finally {
                setLoading(false)
            }
        }
            fetchProducts()
       
    }, [query])
    return { products, loading, error };
}

export default useSearch
