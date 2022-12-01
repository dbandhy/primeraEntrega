//LISTEN
import express from 'express'
import routerProducts from './routers/routerProduct.js'
import routerCarts from './routers/routerCart.js'

const app = express();

const port = process.env.port || 8080;
let admin = false;



app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/products', routerProducts);
app.use('/api/shoppingcart', routerCarts); // ENCONTRAR FORMA DE LEER

function soloParaAdmins(req, res, next) {
    if (admin) {
    next()
    } else
    res.statud(403)
}

app.post('/login', (req, res) => {
    admin = true
    res.sendStatus(200)
})

app.post('/logout', (req, res) => {
    admin = false
    res.sendStatus(200)
})

app.get('/publico', (req, res) => {
    res.send('soy un endpoint público')
})

app.get('/privado', soloParaAdmins, (req, res) => {
    res.send('soy un endpoint privado')
})


app.listen(port, () => {
    console.log('Conectado al puerto 8080')
})


// const port = process.env.PORT ?? 8080 //para glitch usar en .env


// const express = require('express')
// const app = express()

// //ROUTERS
//     //COSAS
//     //PRODUCTOS
// const { routerCosas } = require('./routersControllers')
// const Contenedor = require('./contenedor')
// const products = new Contenedor("productos.json", ["timestamp", "title", "price", "description", "code", "image", "stock"]);
// const shoppingCart = new Contenedor("carrito.json", ["timestamp", "products"])

// let esAdmin = false

// //middleware
// app.use(express.json())
// app.use(express.urlencoded({extended:true}));


// //ROUTERS
// const routerProducts = express.Router();
// const routerShoppingCart = express.Router();

// app.use('/api/products', routerProducts);
// app.use('/api/shoppingCart', routerShoppingCart);


// //FUnciones
// function soloParaAdmins(req, res, next) {
//     if (esAdmin) {
//     next()
//     } else
//     res.statud(403)
// }

// app.post('/login', (req, res) => {
//     esAdmin = true
//     res.sendStatus(200)
// })

// app.post('/logout', (req, res) => {
//     esAdmin = false
//     res.sendStatus(200)
// })

// app.get('/publico', (req, res) => {
//     res.send('soy un endpoint público')
// })

// app.get('/privado', soloParaAdmins, (req, res) => {
//     res.send('soy un endpoint privado')
// })

// //CARGAR

// app.use('/api/cosas', routerCosas)

// app.call('*', (req, res) => {
//     res.status(400).json(/*por implementar */)
// })


