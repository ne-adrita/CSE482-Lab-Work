
import React from 'react';

const EditProduct = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Edit Product</h1>
      <p className="mt-4">Editing product with ID: {window.location.pathname.split('/').pop()}</p>
    </div>
  );
};

export default EditProduct;