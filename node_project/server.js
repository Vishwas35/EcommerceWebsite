
const bodyParser = require("body-parser");

const express = require('express');

const mongoose = require('mongoose');

const PORT = 8000;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const ProductModel = require('./model/Product_Model');
const CartModel = require('./model/Cart_Model');
const UserModel = require('./model/User_Model');


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Accept, Accept-Language, Accept-Encoding');
    next();
});


// Listen Server on Specific PORT
mongoose.connect('mongodb+srv://vishwas3560:KP0ZegOP9iVsHRMI@ecommercewebsite.avmxdm4.mongodb.net/?retryWrites=true&w=majority&appName=EcommerceWebsite')
    .then(() => console.log('Connected Mongodb Successfully...'))
    .catch(err => console.log(err));

// Get All The Products
app.get('/product', async (req, res) => {
    try {
        const products = await ProductModel.find();
        res.status(200).send(products);
    } catch (err) {
        res.status(500).json(err.message);
    }
});

// Get Single Products
app.get('/product/:id', async (req, res) => {
    const { id } = req.body;

    try {
        const productDetail = await ProductModel.findOne({ id });
        res.status(200).send(productDetail);
    } catch (err) {
        res.status(500).json(err.message);
    }
});

// Add Data to the Cart 
app.post('/api/cart', async (req, res) => {
    const { userId, productId, quantity } = req.body;

    try {
        let cartItem = await CartModel.findOne({ userId, productId });

        if (cartItem) {
            cartItem.quantity += quantity;
        } else {
            cartItem = new CartModel({ userId, productId, quantity });
        }

        await cartItem.save();
        res.status(200).json(cartItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get Car List For Parrticular User
app.get('/cart/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const cartItems = await CartModel.find({ userId: id }).populate('productId');
        res.status(200).send(cartItems);
    } catch (err) {
        res.status(500).json(err.message);
    }
}); 

// Listen Server on Specific PORT
app.listen(PORT, function () {
    console.log(`Server running on http://localhost:${PORT}`);
});