import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { CategoryProductData } from '../services/api'

const useCategoryProduct = (name) => {
    const [categoriesProduct, setCategoriesProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    
   
   
    useEffect(() => {
        const fetchCategoryProduct = async () => {
            try {
                setLoading(true)
                const data = await CategoryProductData(name)
                setCategoriesProduct(data?.products||[])
               
            } catch (error) {
                setError(error.message || "something want wrong")
            } finally {
                setLoading(false)
            }
        }
       if (name) {
         fetchCategoryProduct()
       }
    }, [name])

    return { categoriesProduct, loading, error }

}

export default useCategoryProduct
