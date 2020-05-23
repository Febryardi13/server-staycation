const mongoose = require("mongoose")

const categoryImage = new mongoose.Schema({
    imageUrl: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Image', categoryImage)