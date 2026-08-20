import React from 'react';
import Navbar from './src/components/Navbar';
import Footer from './src/components/footer';


const App = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar> 
      <div className='flex-grow'>
      <Routes>
        <Routes path="/" element={<Home />} />
        <Routes path="/" element={<Products/>} />
        <Routes path="/" element={<EditProducts/>} />
        <Routes path="/" element={<AddProducts/>} />
      </Routes>
     </div>
      </Navbar>
      
    </div>
  );
};

export default App;