import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Checkout() {
    const [formData, setFormData] = useState({
        name: '',
        shipping_address: '',
        mailing_address: '',
        email_id:'',
        mobile_number:'',
        card_number:'',
        expiry_date:'',
        cvv:''
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you, Your order has been placed Successfully');
        navigate('/');
    };

    return (
        <div className="product-detail-card" >
                <form className="product-form" onSubmit={handleSubmit}>
                    <h4>User Information</h4>
                    <div className="input-types">
                        <label>Name : </label>
                        <input
                            type="text" name="name" value={formData.name} 
                            onChange={handleChange} 
                            required
                        />
                    </div>
                    <div className="input-types">
                        <label>Shipping Address : </label>
                        <input
                            type="text" name="shipping_address" value={formData.shipping_address} 
                            onChange={handleChange} 
                            required
                        />
                    </div>
                    <h4>Contact Information</h4>
                    <div className="input-types">
                        <label>Mailing Address : </label>
                        <input
                            type="text" name="mailing_address" value={formData.mailing_address} 
                            onChange={handleChange} 
                        />
                    </div>
                    <div className="input-types">
                        <label>Email Id : </label>
                        <input
                            type="text" name="email_id" value={formData.email_id} 
                            onChange={handleChange} 
                            required
                        />
                    </div>
                    <div className="input-types">
                        <label>Mobile Number : </label>
                        <input
                            type="text" name="mobile_number" value={formData.mobile_number} 
                            onChange={handleChange} 
                            required
                        />
                    </div>
                    <h4>Payment Information</h4>
                    <div className="input-types">
                        <label>Card Number : </label>
                        <input
                            type="text" name="card_number" value={formData.card_number} 
                            onChange={handleChange} 
                            required
                        />
                    </div>
                    <div className="input-types">
                        <label>Expiry Date : </label>
                        <input
                            type="text" name="expiry_date" value={formData.expiry_date} 
                            onChange={handleChange} 
                            required
                        />
                    </div>
                    <div className="input-types">
                        <label>Cvv Code : </label>
                        <input
                            type="text" name="cvv" value={formData.cvv} 
                            onChange={handleChange} 
                            required
                        />
                    </div>
                    <br /><br />
                    <button type="submit" className="button-style">Place your Order</button>
                </form>
            </div>
    );
}

export default Checkout;
