import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Header() {
    const role = localStorage.getItem('role');
    const navigate = useNavigate();

    return (
        <header className="header">
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    {role === 'admin' && (
                        <li className="nav-item">
                            <Link to="/categories" className="nav-link">Category</Link>
                        </li>
                    )}

                    {role !== 'admin' && (
                        <li className="nav-item">
                            <Link to="/cart" className="nav-link">Cart</Link>
                        </li>
                    )}
                    {role === 'admin' && (
                        <li className="nav-item">
                            <button style={{ textDecoration: 'none' }} onClick={() => {
                                localStorage.setItem('role', 'user')
                                navigate('/');
                                window.location.reload();
                            }}>logout</button>
                        </li>
                    )}
                    {role !== 'admin' && (
                        <li className="nav-item">
                            <button style={{ textDecoration: 'none' }} onClick={() => {
                                navigate('login');
                            }}>Login</button>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
