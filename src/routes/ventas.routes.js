//import { Router } from 'express';
//const router = Router();

//import productCtrl from '../controllers/productos.controller.js';
const express = require('express');
const router = express.Router();

const ventaCtrl = require('../controllers/ventas.controller')


//Create
router.post('/',ventaCtrl.createOne);
//Read
router.get('/',ventaCtrl.getAll);
router.get('/:id',ventaCtrl.getOne);
//Update
router.put('/:id',ventaCtrl.updateOne);
//Delete
router.delete('/:id',ventaCtrl.deleteOne);

//export default router;
module.exports = router;