import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ProductPage from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import './App.css'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import Products from './pages/Products'
import SearchBar from './components/ui/SearchBar'

import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {

  return (

    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer position="top-center" autoClose={2000} hideProgressBar={true} closeOnClick={false}  />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nosotros" element={<About />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/producto/:productId" element={<ProductPage />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/realizar-pedido" element={<PlaceOrder />} />
        <Route path="/pedidos" element={<Orders />} />
      </Routes>
      <Footer />
    </div>

  )
}

export default App
