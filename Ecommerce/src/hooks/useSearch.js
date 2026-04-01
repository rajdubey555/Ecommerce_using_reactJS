import { useDispatch } from "react-redux"
import { searchData } from "../services/api"


const useSearch = () => {
    const dispatch = useDispatch()

    const search = () => {
        if(!query.trim()) return
        try {
            dispatch(setLoading())
            const data = searchData(query)
            dispatch(setResults(data))
        } catch (error) {
            dispatch(setError(error.message))
        } finally {
            dispatch(setLoading(false))
        }
    }
    return{search}
}

export default useSearch
