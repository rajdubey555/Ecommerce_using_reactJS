import React, { useEffect, useState } from 'react'
import { allProductData } from '../services/productService'
import { useDispatch } from 'react-redux'
import { setProducts } from '../redux/features/productSlice'

const useAllProduct = () => {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const dispatch = useDispatch()

    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                setLoading(true)
                const data = await allProductData()
                dispatch(setProducts(data.products))
                console.log(data.products);
                
            } catch (error) {
                setError(error.message || "something went wrong")
            } finally {
                setLoading(false)
            }
        }
        fetchAllProducts()
    }, [dispatch])

    return { loading, error }
}

export default useAllProduct
