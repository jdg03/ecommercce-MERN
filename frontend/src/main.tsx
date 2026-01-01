
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import ShopContextProvider from './context/ShopContext.tsx'
import CartContextProvider from './context/CartContext.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <ShopContextProvider>
    <CartContextProvider>
    <App />
    </CartContextProvider>
  </ShopContextProvider>
  </BrowserRouter>,
)
