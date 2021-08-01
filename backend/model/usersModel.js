const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    nom:{
       type: String,
       required: true
    }, 
    image:{
        type: String,
        required: true
     },                               
    email:{
        type: String,
        required: true
    },
    telephone:{
        type: String,
        required: true
    },
    adresse:{
        type: String,
        required: true
    },
    mot_de_passe:{
        type: String,
        required: true
    }

})
module.exports = user = mongoose.model('user',userSchema)