const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bulbSchema = new Schema({
    bulb:{
        type:Boolean,
        require:true
    }})


 module.exports=  mongoose.model('Bulbs', bulbSchema)