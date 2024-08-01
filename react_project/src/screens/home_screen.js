// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch('http://localhost:8000/product');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const products = await response.json();
            setProducts(products);
        };

        getProducts();
    }, []);

    return (
        <div className="product-list-container">
            <h2>Product Listings</h2>
            <div className="product-list">
                {products.map(product => (
                    <div key={product._id} className="product-card">
                        <img src={product.image_url} alt={product.name} className="product-image" />
                        <h3 className="title-text">{product.name}</h3>
                        <p className="normal-text">{product.description}</p>
                        <p className="normal-text">${product.price}</p>
                        <Link to={`/product/${product._id}`} className="">Detail</Link>
                        <button className="button-style" onClick={
                            async () => {
                                const response = await fetch('http://localhost:8000/api/cart', {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify({ userId: "66ac0dad27956050442088eb", productId: product._id, quantity: 1 }),
                                });

                                if (!response.ok) {
                                    throw new Error(`HTTP error! status: ${response.status}`);
                                }

                                response.json();
                            }}>
                                Add to Cart
                            </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
