import { Search } from 'lucide-react'
import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom'

const SearchBox = () => {
const navigate = useNavigate()
  const [text, setText] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
    if (!text.trim()) return
     navigate(`/search?q=${text}`)
    setText("")
  }

  return (
    <div className='flex items-center w-1/3 gap-5'>
      <form
        onSubmit={submitHandler}
        className='flex w-full items-center bg-blue-200 rounded-lg px-3 py-2'
      >
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder='Search Products'
          className='bg-transparent w-full outline-none font-semibold'
        />
        <button type='submit'>
          <Search size={22} className='text-blue-600' />
        </button>

      </form>
    </div>
  )
}

export default SearchBox
