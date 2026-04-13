import { useState } from "react"

const usePagination = (data=[], itemsPerPage = 10) =>{
const [currentPage, setCurrentPage] = useState(1)

//total pages
const totalPages = Math.ceil(data.length / itemsPerPage)


//index Calculation
const startIndex = (currentPage-1)* itemsPerPage
const endIndex = startIndex +itemsPerPage

//current page data
const currentData = data.slice(startIndex,endIndex)

//Next page Check
const hasNextPage = currentPage<totalPages


return{
    currentPage,
    setCurrentPage,
    currentData,
    hasNextPage
}
}

export default usePagination;
