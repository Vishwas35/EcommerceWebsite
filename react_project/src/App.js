import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ProductList from './screens/home_screen';
import Cart from './screens/cart_screen';
import Header from './component/header_layout';
import ProductDetails from './screens/product_details';
import Dashboard from './screens/dashboard_screen';
import AddUpdateProduct from './screens/product_add_update_screen';
import AddUpdateCategory from './screens/category_add_update_screen';
import Categories from './screens/categories_screen';
import Login from './screens/admin_login';
import React from 'react';

function App() {
  const role = localStorage.getItem('role');

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {role === 'admin' ?
          <Route path="/" index element={<Dashboard />} /> :
          <Route path="/" index element={<ProductList />} />
        }

        <Route path="/login" index element={<Login />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        {role === 'admin' && (
          <React.Fragment>
            <Route path="/add-products" element={<AddUpdateProduct />} />
            
            <Route path="/update-products/:id" element={<AddUpdateProduct />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/add-category" element={<AddUpdateCategory />} />
            
            <Route path="/update-category/:id" element={<AddUpdateCategory />} />
          </React.Fragment>
        )}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
