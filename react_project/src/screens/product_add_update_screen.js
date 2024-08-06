import { useNavigate, useParams } from 'react-router-dom';
import '../App.css';
import { useEffect, useState } from 'react';

function AddUpdateProduct() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        category: '',
        stock: '',
        brand: '',
        description: '',
        image: ''
    });

    useEffect(() => {
        if (id) {
            const getProduct = async () => {
                const response = await fetch(`http://localhost:8000/product/${id}`);
                if (!response.ok) {
                    alert('Something went wrong!!')
                    return;
                }
                const product = await response.json();
                setFormData({
                    name: product.name,
                    price: product.price,
                    category: product.category,
                    stock: product.stock,
                    brand: product.brand,
                    description: product.description,
                    image: product.image
                });
            };
            getProduct();
        }
    }, [id]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = id ? await fetch(`http://localhost:8000/product/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            }) : await fetch('http://localhost:8000/product', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                alert('Something went wrong!!')
                return;
            }
            alert(`Product ${!id ? 'added' : 'updated'} successfully!`);
            navigate(-1);
        } catch (error) {
            console.error('Error adding product:', error);
            alert('Failed to add product.');
        }
    };

    return (
        <>
            <div className="product-detail-card">
                <form className="product-form" onSubmit={handleSubmit}>
                    <div className="input-types">
                        <div><label>Product Name:</label></div>
                        <input
                            type="text" name="name" value={formData.name} onChange={handleChange} required
                        />
                    </div>
                    <div className="input-types">
                        <label>Price:</label>
                        <input type="number" name="price" value={formData.price} onChange={handleChange} required />
                    </div>
                    <div className="input-types">
                        <label>description:</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-types">
                        <label>Category:</label>
                        <input
                            type="text" name="category" value={formData.category} onChange={handleChange} required
                        />
                    </div>
                    <div className="input-types">
                        <label>Brand:</label>
                        <input type="text" name="brand" value={formData.brand} onChange={handleChange} required />
                    </div>
                    <div className="input-types">
                        <label>Stock Quantity:</label>
                        <input type="number" name="stock" value={formData.stock} onChange={handleChange} required
                        />
                    </div>
                    <div className="input-types">
                        <label>Image URL:</label>
                        <input
                            type="text"
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                        />
                    </div>
                    <br /><br />
                    <button type="submit" className="button-style">{id ? 'Update' : 'Add'} Product</button>
                </form>
            </div>
        </>
    );
}

export default AddUpdateProduct;
