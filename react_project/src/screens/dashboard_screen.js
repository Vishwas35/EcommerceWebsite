// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Dashboard() {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const response = await fetch('http://localhost:8000/product');
        if (!response.ok) {
            alert("Something went wrong!");
        }
        const products = await response.json();
        setProducts(products);
    };

    useEffect(() => {
        getProducts();
    }, []);

    const handleRemove = async (id) => {
        const response = await fetch(`http://localhost:8000/product/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            alert('Something went wrong!!');
            return;
        }
        alert('Product Remove Successfully!');
        getProducts();
    };

    return (
        <div className="product-list-container">
            <h2>Product Listings</h2>
            <div className="product-list">
                <Link to={`/add-products`}><button className="button-style">Add Product</button></Link>
                {products.map(product => (
                    <div key={product._id} className="admin-product-card">
                        <div style={{ display: 'flex' }}>
                            <div style={{ paddingRight: '50px' }}>
                                <p className="title-text"><b>{product.name}</b></p>
                                <p className="title-text">${product.price}</p>
                            </div>
                            <p className="title-text" >{product.description}</p>
                        </div>
                        <div>
                            <Link to={`/update-products/${product._id}`}><button className="second-button-style">Edit</button></Link>
                            <button className="button-style" onClick={() => handleRemove(product._id)}>Delete</button>
                        </div>  
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
