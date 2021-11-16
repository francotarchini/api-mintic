//import { Router } from 'express';
//const router = Router();

//import productCtrl from '../controllers/productos.controller.js';
const express = require('express');
const router = express.Router();

const productCtrl = require('../controllers/productos.controller')


//Create
router.post('/',productCtrl.createOne);
//Read
router.get('/',productCtrl.getAll);
router.get('/:id',productCtrl.getOne);
//Update
router.put('/:id',productCtrl.updateOne);
//Delete
router.delete('/:id',productCtrl.deleteOne);

//export default router;
module.exports = router;