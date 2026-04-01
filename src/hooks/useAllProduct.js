import React, { useEffect, useState } from 'react'
import { allProductData } from '../services/productService'

const useAllProduct = () => {

    const [allProducts, setAllProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                setLoading(true)
                const data = await allProductData()
                setAllProducts(data.products)
            } catch (error) {
                setError(error.message || "something went wrong")
            } finally {
                setLoading(false)
            }
        }
        fetchAllProducts()
    }, [])

    return { allProducts, loading, error }
}

export default useAllProduct
