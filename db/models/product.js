var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    name: {
        type: String,
        default: 'No Name'
    },
    price: {
        type: Number,
        default: 0
    },
    image: {
        type: String,
        default: 'noimg.jpg'
    }
});

module.exports = mongoose.model('product', productSchema, 'product');