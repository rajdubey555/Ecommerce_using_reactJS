import { ColumnsSettings } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { ProductData } from '../services/api'

const useProducts = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true)
                const data = await ProductData()
                setProducts(data.products)
            } catch (error) {
                setError(error.message || "something went wrong")
            } finally {
                setLoading(false)
            }
        }
        fetchProducts()
    }, [])

    return { products, loading, error }
}

export default useProducts
