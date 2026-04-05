import React, { useEffect, useState } from 'react'
import singleProductApi from '../services/singleProduct'

const useProductDetails = (id) => {
  
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() =>{
        const fetchProduct = async () =>{
            try {
                setLoading(true)
                const data = await singleProductApi(id)
                setProduct(data)
                console.log(data)
            } catch (error) {
                setError(error.message || "something went wrong")
            }finally{
                setLoading(false)
            }
        }
        if(id){
            fetchProduct()
        }
    },[id])

    return {product,loading,error}
}

export default useProductDetails
