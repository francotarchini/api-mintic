//import mongoose, { model } from 'mongoose';
//const {Schema} = mongoose;
const mongoose = require('mongoose')
const {Schema} = mongoose;

const UsuarioSchema = new Schema({

    usuario:{type:String,required:true},
    nombre:{type:String,required:true,default:''},
    apellido:{type:String,required:true,default:''},
    rol: {
        type: String,
        enum : ['administrador','vendedor'],
        default: 'vendedor'
    },
    estado: {
        type: String,
        enum : ['pendiente','autorizado','no autorizado'],
        default: 'pendiente'
    }
})

//export default model('usuarios',UsuarioSchema);
module.exports = mongoose.model('ventas',VentaSchema);
