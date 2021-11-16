//import { Router } from 'express';
//const router = Router();

//import productCtrl from '../controllers/productos.controller.js';
const express = require('express');
const router = express.Router();

const usuarioCtrl = require('../controllers/usuarios.controller')


//Create
router.post('/',usuarioCtrl.createOne);
//Read
router.get('/',usuarioCtrl.getAll);
router.get('/:id',usuarioCtrl.getOne);
//Update
router.put('/:id',usuarioCtrl.updateOne);
//Delete
router.delete('/:id',usuarioCtrl.deleteOne);

//export default router;
module.exports = router;