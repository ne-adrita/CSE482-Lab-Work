import React from 'react';

const AddProduct = () => {
    const [formData, setFormData] = useState({ title: '', price: '', description:
        '', imageUrl: '' });
        
         const navigate = useNavigate();
         const handleChange = (e) => {
         setFormData({ ...formData, [e.target.name]: e.target.value });
         };

         const handleSubmit = async (e) => {
         e.preventDefault();
         try {
         await axios.post('http://localhost:5000/api/products', formData);
         navigate('/products');
         } catch (error) {
         console.error('Error adding product:', error);
         }
         };

    return (
        <div className="max-w-md mx-auto my-8 p-6 bg-base-100 border rounded-xl
       shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Add New Product</h2>
        <form  className="space-y-4">
        <div>
        <label className="label">Title</label>
        <input type="text" name="title" className="input input-bordered w-full"
       required />
        </div>
        <div>
        <label className="label">Price ($)</label>
        <input type="number" name="price" className="input input-bordered wfull"  required />
        </div>
        <div>
        <label className="label">Image URL</label>
        <input type="text" name="imageUrl" className="input input-bordered wfull" required />
        </div>
        <div>
        <label className="label">Description</label>
        <textarea name="description" className="textarea textarea-bordered wfull"  required />
        </div>
        <button type="submit" className="btn btn-primary w-full">Save
       Product</button>
        </form>
        </div>
    );
};

export default AddProduct;