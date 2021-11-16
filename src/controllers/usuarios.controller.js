//import Usuario, { findById, find, findByIdAndUpdate, findByIdAndDelete } from '../models/usuarios.js';
//const usuarioCtrl = {}
const Usuario = require('../models/usuarios');
const usuarioCtrl = {}


usuarioCtrl.getOne = async (req,res) =>
{
    try
    {
        let id = req.params.id;
        let usuario = await findById(id);
        res.json(usuario)
    }
    catch(err)
    {
        console.log(err);
        return res.json(err)
    }
}

usuarioCtrl.getAll = async (req,res) =>
{
    try
    {
        let usuarios = await find();
        res.json(usuarios)
    }
    catch(err)
    {
        console.log(err);
        return res.json(err)
    }
}

usuarioCtrl.createOne = async (req,res) =>
{
    try
    {
        //let id = mongoose.Types.ObjectId();
        let usuarioData = req.body;
        let usuario = new Usuario(usuarioData);
        await usuario.save();
        res.json({msg:" Usuario created"})
    }
    catch(err)
    {
        console.log(err);
        return res.json(err)
    }
}

usuarioCtrl.updateOne = async (req,res) =>
{
    try
    {
        let data = req.body;
        let id = req.params.id;
        await findByIdAndUpdate(id,data);
        res.json({msg:"Usuario updated"})
    }
    catch(err)
    {
        console.log(err);
        return res.json(err)
    }
}

usuarioCtrl.deleteOne = async (req,res) =>
{
    try
    {
        var id = req.params.id;
        await findByIdAndDelete(id);
        res.json({msg:"Usuario deleted"})
    }
    catch(err)
    {
        console.log(err);
        return res.json(err)
    }
}

//export default usuarioCtrl;
module.exports = usuarioCtrl;



























