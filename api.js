import Contenedor from "./contenedor.js"
import crypto from 'crypto'

const cosas = new Contenedor()

export function crear(datos) {
    datos.id = crypto.randomUUID()
    cosas.guardarNuevo(datos)
    return datos
}