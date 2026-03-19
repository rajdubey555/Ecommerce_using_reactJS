import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Slider from '../components/Slider'
import Product_Cards from '../components/Product_Cards'
import Product_Cards2 from '../components/Product_Cards2'
import Product_Cards3 from '../components/Product_Cards3'

const Home = () => {
  return (
    <div>
  
      <Slider />
      <Product_Cards />
      <Product_Cards2/>
      <Product_Cards3/>
     
    </div>
  )
}

export default Home
