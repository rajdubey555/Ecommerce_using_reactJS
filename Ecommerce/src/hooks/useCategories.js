import { useEffect, useState } from "react"
import { CategoryShowData } from "../services/api"


const useCategories = () => {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                setLoading(true)
                const data = await CategoryShowData()
                const uniqueCategories = [];
                data.forEach(item => {
                    const exists = uniqueCategories.find(
                        (c) => c.name === item.name)

                    if (!exists) {
                        uniqueCategories.push(item)
                    }
                });
                setCategories(uniqueCategories)
            } catch (error) {
                setError(error.message || "Something went wrong")
            } finally {
                setLoading(false)
            }
        }
        fetchCategories()
    }, [])

    return { categories, loading, error }
}

export default useCategories