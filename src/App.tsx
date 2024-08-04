import './App.css'

import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Info from './pages/info';
import SearchPage from './pages/searchpage';

import { ProductProvider } from './commonLogic/ProductContext';
import Cart from './pages/cart';
import { CartProvider } from './commonLogic/CartContext';
import Favourites from './pages/favourites';

function App() {

  return (
    <ProductProvider>
      <CartProvider>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/product/:id" element={<Info />} />
          <Route path="/results" element={<SearchPage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/favourites' element={<Navigate to="/favourites/searches" />} />
          <Route path='/favourites/categories'element={<Favourites />} />
          <Route path='/favourites/sellers' element={<Favourites />} />
          <Route path='/favourites/searches' element={<Favourites />} />
          
        </Routes> 
      </CartProvider>
    </ProductProvider>
  )
}

export default App
