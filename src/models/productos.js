//import mongoose, { model } from 'mongoose';
//const {Schema} = mongoose;
const mongoose = require('mongoose')
const {Schema} = mongoose;

const ProductSchema = new Schema({

    producto:{type:String,required:true},
    descripcion:{type:String,required:true},
    precio:{type:String,required:true},
    unidades:{type:String,required:true},
    estado: {
        type: String,
        enum : ['disponible','no disponible'],
        default: 'disponible'
    }
})


module.exports = mongoose.model('Product',ProductSchema);