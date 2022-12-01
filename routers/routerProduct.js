import express from 'express'
import * as controllerProducts from '../controllers/controllerProducts.js'

const routerProducts = express.Router();
routerProducts.get('/:id?', (req, res) => controllerProducts.getProducts(req, res));
routerProducts.post('/', (req, res) => controllerProducts.addProduct(req, res));
routerProducts.put('/:id', (req, res) => controllerProducts.updateProduct(req, res));
routerProducts.delete('/:id', (req, res) => controllerProducts.deleteProduct(req, res));

export default routerProducts

// import {Router} from 'express'
// import * as cosasApi from './api.js'
// export const routerCosas = Router()

// routerCosas.post('/', async (req, res) => {
//     const cosaCreada = await cosasApi.crear(req.body)
//     res.json(cosaCreada)
// })