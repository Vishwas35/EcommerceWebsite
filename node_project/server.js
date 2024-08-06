
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
const CategoriesModel = require('./model/Category_Model');


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

// Products APIS
app.get('/product', async (req, res) => {
    try {
        const products = await ProductModel.find();
        res.status(200).send(products);
    } catch (err) {
        res.status(500).json(err.message);
    }
});

app.post('/product', async (req, res) => {
    try {
        productItem = new ProductModel({ ...req.body });
        await productItem.save();
        res.status(200).json(productItem);
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
});

app.put('/product/:id', async (req, res) => {
    try {
        var product = await ProductModel.findByIdAndUpdate(req.params.id, req.body);
        if (!product) return res.status(404).json('Product Not Found');
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
});

app.get('/product/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const productDetail = await ProductModel.findById(id);
        res.status(200).send(productDetail);
    } catch (err) {
        res.status(500).json(err.message);
    }
});

app.delete('/product/:id', async (req, res) => { 
    const { id } = req.params.id;
    try {
        const currProduct = await ProductModel.findOneAndDelete({ id });
        if (!currProduct) return res.status(404).json('Product Not Found');
        res.status(200).send("Deleted Successfulyy");
    } catch (err) {
        res.status(500).json(err.message);
    }
});

// Categories APIS
app.get('/categories', async (req, res) => {
    try {
        const categories = await CategoriesModel.find();
        res.status(200).send(categories);
    } catch (err) {
        res.status(500).json(err.message);
    }
});

app.post('/categories', async (req, res) => {
    try {
        categoryItem = new CategoriesModel({ ...req.body });
        await categoryItem.save();
        res.status(200).json(categoryItem);
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
});

app.put('/categories/:id', async (req, res) => {
    try {
        var category = await CategoriesModel.findByIdAndUpdate(req.params.id, req.body);
        if (!category) return res.status(404).json('Category Not Found');
        res.status(200).json(category);
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
});

app.get('/categories/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const categoryDetail = await CategoriesModel.findById(id);
        res.status(200).send(categoryDetail);
    } catch (err) {
        res.status(500).json(err.message);
    }
});

app.delete('/categories/:id', async (req, res) => { 
    const { id } = req.params.id;
    try {
        const currCategory = await CategoriesModel.findOneAndDelete({ id });
        if (!currCategory) return res.status(404).json('Category Not Found');
        res.status(200).send("Category Deleted Successfulyy");
    } catch (err) {
        res.status(500).json(err.message);
    }
});

// Cart APIS
app.post('/cart', async (req, res) => {
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
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
});

// Get Cart List For Particular User 
app.get('/cart/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const cartItems = await CartModel.find({ userId: id }).populate('productId');
        res.status(200).send(cartItems);
    } catch (err) {
        res.status(500).json(err.message);
    }
});

app.delete('/cart/:id', async (req, res) => {
    const { id } = req.params.id;
    try {
        const currCarItem = await CartModel.findOneAndDelete({ id });
        if (!currCarItem) return res.status(404).json('Cart Item Not Found');
        res.status(200).send("Deleted Successfulyy");
    } catch (err) {
        res.status(500).json(err.message);
    }
});

// Listen Server on Specific PORT
app.listen(PORT, function () {
    console.log(`Server running on http://localhost:${PORT}`);
});