//import Product, { findById, find, findByIdAndUpdate, findByIdAndDelete } from '../models/productos.js';
const Product = require('../models/productos');
const productCtrl = {}


productCtrl.getOne = async (req,res) =>
{
    try
    {
        let id = req.params.id;
        let product = await findById(id);
        res.json(product)
    }
    catch(err)
    {
        console.log(err);
        return res.json(err)
    }
}

productCtrl.getAll = async (req,res) =>
{
    try
    {
        let products = await find();
        res.json(products)
    }
    catch(err)
    {
        console.log(err);
        return res.json(err)
    }
}

productCtrl.createOne = async (req,res) =>
{
    try
    {
        //let id = mongoose.Types.ObjectId();
        let productData = req.body;
        let product = new Product(productData);
        await product.save();
        res.json({msg:" Product created"})
    }
    catch(err)
    {
        console.log(err);
        return res.json(err)
    }
}

productCtrl.updateOne = async (req,res) =>
{
    try
    {
        let data = req.body;
        let id = req.params.id;
        await  findByIdAndUpdate(id,data);
        res.json({msg:"Product updated"})
    }
    catch(err)
    {
        console.log(err);
        return res.json(err)
    }
}

productCtrl.deleteOne = async (req,res) =>
{
    try
    {
        let id = req.params.id;
        await  findByIdAndDelete(id);
        res.json({msg:"Product deleted"})
    }
    catch(err)
    {
        console.log(err);
        return res.json(err)
    }
}

//export default productCtrl;
module.exports = productCtrl;


























