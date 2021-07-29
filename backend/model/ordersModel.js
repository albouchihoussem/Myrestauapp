const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
    reference:{
       type: String,
       required: true
    },                              
    nom:{
        type: String,
        required: true
    },
    prix:{
        type: String,
        required: true
    },
    statut:{
        type: String,
        required: true
    }

})
module.exports = order = mongoose.model('order',orderSchema)