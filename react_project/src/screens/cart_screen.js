import React, { useEffect, useState } from 'react';
import '../App.css';

const Cart = ({ userId }) => {
    const [cart, setCart] = useState([]);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const getCartItems = async () => {
            const response = await fetch('http://localhost:8000/cart/66ac0dad27956050442088eb');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const cartItems = await response.json();
            setCart(cartItems);
        };
        
        getCartItems();
    }, [userId]);

    const handleRemove = (id) => {
        fetch(`http://localhost:8000/cart/${id}`)
            .then(() => {
                setCart(cart.filter(item => item._id !== id));
            })
            .catch(error => {
                console.error("There was an error removing the item from the cart!", error);
            });
    };

    return (
        <div className="cart-container">
            <h2>Shopping Cart</h2>
            {
                <>
                    <ul className="cart-list">
                        {cart.map(item => (
                            <li key={item._id} className="cart-item">
                                <h3 className="title-text">{item.productId.name}</h3>
                                <p className="normal-text">Quantity: 
                                    <input
                                        type="number"
                                        id="quantity"
                                        className="form-control"
                                        value={quantity}
                                        onChange={(e) => setQuantity(parseInt(e.target.value))}
                                        min="1"
                                    />
                                </p>
                                <button className="remove-button" onClick={() => handleRemove(item._id)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <button className="button-style">Checkout</button>
                </>
            }
        </div>
    );
};

export default Cart;
