const mongoose = require('mongoose');
const connectionString = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.v4z3g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
mongoose.connect(connectionString);

const userSchema = mongoose.Schema({
    username: {type: String},
    password: {type: String},
    myAllergy:{
        type:[]
    },
})

const userModel = mongoose.model('registeredUser', userSchema)
module.exports = userModel