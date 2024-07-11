import './App.css'
import React from 'react';
import { BrowserRouter,Route, Router, Routes } from 'react-router-dom';
import Home from './pages/home';
import Info from './pages/info';
import SearchPage from './pages/searchpage';
import cardData from './data/data';
import { ProductProvider } from './commonLogic/ProductContext';

function App() {

  return (
    <ProductProvider>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/product/:id" element={<Info cardData={cardData} />} />
          <Route path="/results" element={<SearchPage />} />
        </Routes> 

    </ProductProvider>
  )
}

export default App
