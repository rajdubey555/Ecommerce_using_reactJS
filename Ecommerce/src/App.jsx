import React, {useContext } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Routes, Route } from "react-router-dom";
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Category from './pages/Category';
import Layout from './components/Layout';
import { ThemeContext } from './context/ThemeContext';
import Cart from './pages/Cart';
import { Toaster } from "react-hot-toast";

const App = (props) => {

  const { Theme } = useContext(ThemeContext)
      console.log(Theme);
  return (

    <div className={Theme}>
   
     
<Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#1f2937", // dark gray
            color: "#fff",
            borderRadius: "10px",
            padding: "12px 16px",
          },
          success: {
            iconTheme: {
              primary: "green",
              secondary: "white",
            },
          },
          error: {
            iconTheme: {
              primary: "red",
              secondary: "white",
            },
          },
        }}
      />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='Category/:name' element={<Category />} />
          <Route path='cart' element={<Cart />} />

        </Route>
      </Routes>

    </div>

  )
}

export default App

