const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bulbSchema = new Schema({
    bulb:{
        type:String,
        require:true
    }})


 module.exports=  mongoose.model('Bulbs', bulbSchema)