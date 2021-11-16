//import Venta, { findById, find, findByIdAndUpdate, findByIdAndDelete } from '../models/ventas.js';
//const ventaCtrl = {}
const Venta = require('../models/usuarios');
const ventaCtrl = {}

ventaCtrl.getOne = async (req,res) =>
{
    try
    {
        let id = req.params.id;
        let venta = await findById(id);
        res.json(venta)
    }
    catch(err)
    {
        console.log(err);
        return res.json(err)
    }
}

ventaCtrl.getAll = async (req,res) =>
{
    try
    {
        let ventas = await find();
        res.json(ventas)
    }
    catch(err)
    {
        console.log(err);
        return res.json(err)
    }
}

ventaCtrl.createOne = async (req,res) =>
{
    try
    {
        //let id = mongoose.Types.ObjectId();
        let ventaData = req.body;
        let venta = new Venta(ventaData);
        await venta.save();
        res.json({msg:" Venta created"})
    }
    catch(err)
    {
        console.log(err);
        return res.json(err)
    }
}

ventaCtrl.updateOne = async (req,res) =>
{
    try
    {
        let data = req.body;
        let id = req.params.id;
        await  findByIdAndUpdate(id,data)
        res.json({msg:"Venta updated"})
    }
    catch(err)
    {
        console.log(err);
        return res.json(err)
    }
}

ventaCtrl.deleteOne = async (req,res) =>
{
    try
    {
        let id = req.params.id;
        await  findByIdAndDelete(id)
        res.json({msg:"Usuario deleted"})
    }
    catch(err)
    {
        console.log(err);
        return res.json(err)
    }
}

//export default ventaCtrl;
module.exports = ventaCtrl;



/* const read = (req, res, next) => {
    const userId = req.params.id;
    if(!userId) {
      return res.status(400).json({
        error: 'No id'
      });
    }
    User.findById(userId)
      .exec((err, user) => {
        if(err) {
          return res.status(500).json({
            error: 'Server error: ' + err.message
          });
        }
        if(!user) {
          return res.status(400).json({
            err: 'No user find with id: ' + userId
          });
        }
        // creamos el objeto que enviaremos al front
        let usr = {};
        usr._id = user._id;  // llenamos los campos que deseamos enviar
        usr.nombre = user.nombre;
        usr.apel1 = user.apel1;
        usr.apel2 = user.apel2;
        usr.email = user.email;
        usr.fecha_nacimiento = user.fecha_nacimiento; // <= Aqui estamos usando el campo virtual
        return res.status(200).json(usr); // <= enviamos 'usr' al front
      });
  }

 */




















