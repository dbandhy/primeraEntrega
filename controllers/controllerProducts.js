import Contenedor from '../Contenedor.js'

export const products = new Contenedor('./data/products.json');

//OBtener todos los productos

export const getProducts = async (req, res) => {
    if (req.params.id == undefined)
        return res.send(await products.read());
    const id = Number(req.params.id)
    const product = await products.getById(id)
    if (!product)
        return res.status(404)
    res.json(product)

}

//Agregar producto
export const addProduct = async (req, res) => {
    const { title, price, thumbnail } = req.body;
    await products.save({ title, price, thumbnail });
    res.json({ message: 'se agregó el producto exitosamente' });
}

//actualizar producto- put
export const updateProduct = async (req, res) => {
    const id = Number(req.params.id);
    if (id < 0)
        return res.status(400)
    await products.updateById(id, req.body);
    res.json({ message: 'producto actualizado' })
}

// eliminar producto

export const deleteProduct = async (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id))
        return res.status(400)
    const productDeleted = await products.deleteById(id);
    if (productDeleted === -1)
        return res.status(404)
    res.json({ message: 'se eliminó el producto' })
}

//export default { products, getProducts, addProduct, updateProduct, deleteProduct }