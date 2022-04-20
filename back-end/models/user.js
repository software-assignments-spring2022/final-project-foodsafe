const mongoose = require('mongoose');
const Product = require('./product');
//this is the user schema
const User = new mongoose.Schema({
    userName:{
        required:true,
        type:String
    },
    password:{
        required:true,
        type:String
    },
    groceryList:[Product],
    myALlergy:{
        required:true,
        type:[]
    },
    groceryHistory:[]
})

module.exports = mongoose.model('User',User)

