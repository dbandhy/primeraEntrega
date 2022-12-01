import Contenedor from '../Contenedor.js'
let admin;
const shoppingCart = new Contenedor('./data/cart.json');

//agregar carrito
export const addCart = async (req, res) => {
    const products = req.body;
    if (!products)
        return await shoppingCart.save([]);
    await shoppingCart.save(products);
    res.json({ message: 'carrito creado' })
}


//Eliminar carrito
export const deleteCart = async (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id))
        return res.status(400)
    const cartDeleted = await shoppingCart.deletedById(id);

    if (cartDeleted === -1)
        return res.status(404)
    res.json({ message: 'compra eliminada' })

}

//Obtener productos de un carrito

export const getProducts = async (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id))
        return res.status(400)
    const cartSelected = await shoppingCart.getById(id);

    if (cartSelected === null)
        return res.status(404)
    res.json({ 'pedido': cartSelected.products })
}

//Agregar producto a un carrito construido

export const addProduct = async (req, res) => {
    const idCartSelected = Number(req.params.id);
    if (isNaN(idCartSelected))
        return res.status(400)
    const { idProduct } = req.body;
    const productSaved = shoppingCart.saveProduct(idCartSelected, idProduct);
    if (!productSaved)
        return res.status(404)
    res.json({ message: productSaved })

}

//Eliminar producto de un carrito construido

export const deleteProduct = async (req, res) => {
    const id = Number(req.params.id);
    const idProd = Number(req.params.idProd);
    if (isNaN(id))
        return res.status(400)
    if (isNaN(idProd))
        return res.status(400)
    const productDeleted = shoppingCart.deleteProduct(id, idProd)
    if (productDeleted == -1)
        return res.status(404)
    if (!productDeleted)
        return res.status(404)
    res.json({ message: 'producto eliminado correctamente' })

}

// export { addCart, deleteCart, deleteProduct, getProducts, addProduct }