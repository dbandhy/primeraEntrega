import express from 'express'
import * as controllerProducts from '../controllers/controllerProducts.js'

const routerProducts = express.Router();
routerProducts.get('/:id?', (req, res) => controllerProducts.getProducts(req, res)); //funciona
routerProducts.post('/', (req, res) => controllerProducts.addProduct(req, res)); //funciona
routerProducts.put('/:id', (req, res) => controllerProducts.updateProduct(req, res)); //funciona
routerProducts.delete('/:id', (req, res) => controllerProducts.deleteProduct(req, res)); //funciona

export default routerProducts

// import {Router} from 'express'
// import * as cosasApi from './api.js'
// export const routerCosas = Router()

// routerCosas.post('/', async (req, res) => {
//     const cosaCreada = await cosasApi.crear(req.body)
//     res.json(cosaCreada)
// })