import { Search } from 'lucide-react'
import React from 'react'

const SearchBox = () => {
  return (
    <div className='flex items-center w-1/3 gap-5'>
       
      <input placeholder='Search Products' className='border-none bg-blue-200 w-full h-full rounded-lg outline-none text-center font-bold' type="text" />
     <Search size={30} color="#0565ff" />
    </div>
  )
}

export default SearchBox
