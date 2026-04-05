import React from 'react'
import Navbar2 from './Navbar2'
import SearchBox from '../ui/SearchBox'


const Navbar = () => {
  return (
    <div className="flex px-8 py-3 bg-[var(--card)] border-b border-[var(--border)] justify-between items-center">

      <h2 className="text-3xl font-bold text-[var(--primary)]">
        Raj Coder
      </h2>

      <SearchBox />

      <Navbar2 />

    </div>
  );
};

export default Navbar
