import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Login() {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
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
        const { username, password } = formData;
        if (username === 'admin' 
            && password === 'admin@123') {
            localStorage.setItem('role', 'admin');
            navigate('/');
            window.location.reload()
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <div className="product-detail-card" >
                <form className="product-form" onSubmit={handleSubmit}>
                    <div className="input-types">
                        <label>Username:</label>
                        <input
                            type="text" name="username" value={formData.username} 
                            onChange={handleChange} 
                            required
                        />
                    </div>
                    <br />
                    <div className="input-types">
                        <label>Password:</label>
                        <input
                            type="password" name="password" value={formData.password} 
                            onChange={handleChange} 
                            required
                        />
                    </div>
                    <br /><br />
                    <button type="submit" className="button-style">Login</button>
                </form>
            </div>
    );
}

export default Login;
