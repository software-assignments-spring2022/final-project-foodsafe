const mongoose = require('mongoose');
const Product = new mongoose.Schema({
    name: {type: String},
    price: {type: Number},
    image: {type: String},
});

module.exports = mongoose.model('Product',Product);