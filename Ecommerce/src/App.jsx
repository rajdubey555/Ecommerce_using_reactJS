import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Routes,Route } from "react-router-dom";
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Category from './pages/Category';
import Layout from './components/Layout';

const App = (props) => {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
      <Route path='/Category/:name' element={<Category  />} />
      </Route>
      </Routes>
      
    </div>
  )
}

export default App
