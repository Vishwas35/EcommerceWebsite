import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductList from './screens/home_screen';
import Cart from './screens/cart_screen';
import Header from './component/header_layout';
import ProductDetails from './screens/product_details';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" index element={<ProductList/>} />
        <Route path="/products" element={<ProductList/>} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
