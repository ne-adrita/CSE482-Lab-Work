import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  
import Navbar from './components/Navbar';   
import Footer from './components/Footer';   
import Home from './pages/Home';            
import Products from './pages/Products';    
import EditProduct from "./pages/EditProduct";
import AddProduct from './pages/AddProduct';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar /> 
      <div className='flex-grow'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Products />} />
          <Route path="/edit-product/:id" element={<EditProduct />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="*" element={<NotFound />} />  {/* ✅ 404 page */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;