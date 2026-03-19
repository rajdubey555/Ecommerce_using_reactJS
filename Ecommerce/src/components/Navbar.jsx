import React from 'react'
import Navbar2 from './Navbar2'
import SearchBox from './SearchBox'


const Navbar = () => {
    return (
        <div>
            <div className='flex px-8 py-2 bg-white justify-between'>
                <h2 className='text-3xl  font-bold text-blue-500'>Raj Coder</h2>
                <SearchBox />
                <Navbar2 />
            </div>
        </div>
    )
}

export default Navbar
