import React, { useEffect, useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const Cart = ({ userId }) => {
    const [cart, setCart] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        const getCartItems = async () => {
            const response = await fetch('http://localhost:8000/cart/66ac0dad27956050442088eb');
            if (!response.ok) {
                alert('Something went wrong!!');
                return;
            }
            const cartItems = await response.json();
            setCart(cartItems);
        };

        getCartItems();
    }, [userId]);

    const handleRemove = async (id) => {
        const response = await fetch(`http://localhost:8000/cart/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            alert('Something went wrong!!');
            return;
        }
        alert('Item Remove Successfully from cart!');
        setCart(cart.filter(item => item._id !== id));
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
                                <p className="normal-text">{'Quantity :   '}
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
                    <br />
                    <br />
                    <button className="button-style" onClick={() => { navigate("/checkout"); }}>Checkout</button>
                </>
            }
        </div>
    );
};

export default Cart;
