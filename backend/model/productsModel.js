const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
                             
    nom:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    prix:{
        type: String,
        required: true
    }

})
module.exports = product = mongoose.model('product',productSchema)