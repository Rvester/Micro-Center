//load mongoose
const mongoose = require('mongoose')

//shorten the 
const Schema = mongoose.Schema

//create our Schema
const microSchema = new Schema({
        name: {type:String, required: true},
        price: {type:Number, required: true},
        image : {type:String},
        productDescrip: {type:String, required: true},
        inventory: {type:String, required: true}     
})

//create a Model from our Schema
const micro = mongoose.model('micro', microSchema)

//export our Model
module.exports = micro;