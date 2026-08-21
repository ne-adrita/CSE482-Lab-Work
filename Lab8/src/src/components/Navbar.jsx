import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    return ( 
            <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <Link to="/" className="btn btn-ghost text-xl btn-sm">
   Inventory
    </Link>
  </div>
  <div className="flex-none gap-2">
   <Link to="/add-product" className="btn btn-ghost btn-sm">Add Products</Link>
   <Link to="/edit-product" className="btn btn-ghost btn-sm">Edit Products</Link>
   <Link to="/products" className="btn btn-ghost btn-sm">All Products</Link>
  </div>
</div>
        
    );
};

export default Navbar;