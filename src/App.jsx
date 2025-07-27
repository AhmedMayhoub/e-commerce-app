import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Collection from "./pages/Collection"
import Product from "./pages/Product"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import SearchBar from "./components/SearchBar"

import { ToastContainer } from 'react-toastify';
import Cart from "./pages/Cart"
import Orders from "./pages/Orders"
import PlaceOrder from "./pages/PlaceOrder"

function App() {

  return (
    <>
      
      <div className=" px-[5vw] md:px-[6vw] lg:px-[9vw]">
        <ToastContainer />
        <Navbar />
        <SearchBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection/>} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="/place-order" element={<PlaceOrder/>} />
          
       </Routes>
      <Footer/>
      </div>
    </>
  )
}

export default App
