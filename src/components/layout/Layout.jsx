import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col" >
      <>
        <nav >
          <Navbar />
        </nav>

        <main className="grow ">
          <Outlet />
        </main>

        <footer >
          <Footer />
        </footer>

      </>
    </div>
  )
}

export default Layout 
