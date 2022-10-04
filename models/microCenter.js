//load mongoose
const mongoose = require('mongoose')

//shorten the 
const Schema = mongoose.Schema

//create our Schema
const microSchema = new Schema({
        Device: {type:String, required: true},
        price: {type:String, required: true},
        addToCart: Boolean     
})

//create a Model from our Schema
const micro = mongoose.model('micro', microSchema)

//export our Model
module.exports = micro;