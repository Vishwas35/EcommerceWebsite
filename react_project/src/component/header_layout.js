import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Header({ onLogout }) {
    return (
        <header className="header">
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/cart" className="nav-link">Cart</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
