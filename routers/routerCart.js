import express from'express'
import * as cartController from'../controllers/controllerCart.js'

const routerCarts = express.Router();

//routerCarts.get('/', (req, res) => cartController.getProducts(req, res));
routerCarts.post('/', (req, res) => cartController.addCart(req, res)); //funciona
routerCarts.delete('/:id', (req, res) => cartController.deleteCart(req, res)); //funciona
routerCarts.get('/:id/products', (req, res) => cartController.getProducts(req, res)); //funciona
routerCarts.post('/:id/products', (req, res) => cartController.addProduct(req, res));
routerCarts.delete('/:id/products/:idProd', (req, res) => cartController.deleteProduct(req, res));

export default routerCarts