import './App.css'
import React from 'react';
import { BrowserRouter,Route, Router, Routes } from 'react-router-dom';
import Home from './pages/home';
import Info from './pages/info';
import SearchPage from './pages/searchpage';
import cardData from './data/data';
import { ProductProvider } from './commonLogic/ProductContext';
import Cart from './pages/cart';
import { CartProvider } from './commonLogic/CartContext';

function App() {

  return (
    <ProductProvider>
      <CartProvider>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/product/:id" element={<Info />} />
          <Route path="/results" element={<SearchPage />} />
          <Route path='/cart' element={<Cart />} />
        </Routes> 
      </CartProvider>
    </ProductProvider>
  )
}

export default App
