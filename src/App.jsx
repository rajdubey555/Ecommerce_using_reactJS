import Home from './pages/Home'
import { Routes, Route } from "react-router-dom";
import About from './pages/About';
import Contact from './pages/Contact';
import Category from './pages/Category';
import Layout from './components/layout/Layout';
import { ThemeContext } from './context/ThemeContext';
import Cart from './pages/Cart';
import { Toaster } from "react-hot-toast";
import { useContext } from 'react';
import ProductPage from './pages/ProductPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import SearchPage from './pages/SearchPage';
import { Error404 } from "react-404-error-page";

const App = (props) => {

  const { theme } = useContext(ThemeContext)
  console.log(theme);
  return (

    <div className="min-h-screen bg-(--bg) text-(-(--text))">


      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "var(--card)",
            color: "var(--text)",
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
          <Route path='category/:name' element={<Category />} />
          <Route path='cart' element={<Cart />} />
          <Route path='products' element={<ProductPage />} />
          <Route path='product/:id' element={<ProductDetailsPage />} />
          <Route path='search' element={<SearchPage />} />
          <Route path="*" element={<Error404
          title="404 ERROR"
  subtitle="Oops! Page not found"
  message="The page you are looking for does not exist."
  redirectText="Go Back Home"
  redirectUrl="/"
  redirectDelay={5000} />} />

        </Route>
      </Routes>

    </div>

  )
}

export default App

