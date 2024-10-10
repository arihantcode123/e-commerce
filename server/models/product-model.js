const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true }
});

const Product = new model('Product', productSchema);

module.exports = Product;