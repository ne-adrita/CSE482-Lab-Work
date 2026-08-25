import React from 'react';
import { useParams } from 'react-router-dom';

const EditProduct = () => {
  const { id } = useParams();
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Edit Product</h1>
      <p className="mt-4">Editing product with ID: {id || 'N/A'}</p>
    </div>
  );
};

export default EditProduct;