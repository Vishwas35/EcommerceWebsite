import React, { useEffect, useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Categories() {
    const [categories, setCategories] = useState([]);

    const getCategories = async () => {
        const response = await fetch('http://localhost:8000/categories');
        if (!response.ok) {
            alert("Something went wrong!");
        }
        const categories = await response.json();
        setCategories(categories);
    };

    useEffect(() => {
        getCategories();
    }, []);

    const handleRemove = async (id) => {
        const response = await fetch(`http://localhost:8000/categories/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            alert('Something went wrong!!');
            return;
        }
        alert('Category Remove Successfully!');
        getCategories();
    };

    return (
        <div className="product-list-container">
            <h2>Category Listings</h2>
            
            <div className="product-list">
                <Link to={`/add-category`}><button className="button-style">Add Category</button></Link>
                {categories.map(product => (
                    <div key={product._id} className="admin-product-card">
                        <div style={{ display: 'flex' }}>
                        <p className="title-text" style={{ paddingRight: '50px' }}><b>{product.name}</b></p>
                        <p className="title-text">{product.description}</p>
                        </div>  
                        <div>
                            <Link to={`/update-category/${product._id}`}><button className="second-button-style">Edit</button></Link>
                            <button className="button-style" onClick={() => handleRemove(product._id)}>Delete</button>
                        </div>  
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
