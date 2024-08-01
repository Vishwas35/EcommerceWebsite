
const bodyParser = require("body-parser");

const express = require('express');

const mongoose = require('mongoose');

const PORT = 8080;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Listen Server on Specific PORT
mongoose.connect('mongodb+srv://vishwas3560:KP0ZegOP9iVsHRMI@ecommercewebsite.avmxdm4.mongodb.net/?retryWrites=true&w=majority&appName=EcommerceWebsite')
    .then(() => console.log('Connected Mongodb Successfully...'))
    .catch(err => console.log(err));


// Listen Server on Specific PORT
app.listen(PORT, function () {
    console.log(`Server running on http://localhost:${PORT}`);
});