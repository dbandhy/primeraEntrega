import fs from "fs"

//import { randomUUID } from "crypto"

export default class Contenedor {
  constructor(ruta) {
    this.filepath = ruta
  }

  async read() {

    try {
      const products = await fs.promises.readFile(this.filepath, 'utf-8')
      return JSON.parse(products);
    } catch (err) {
      return [];
    }

  }

  async deleteAll() {
    await fs.promises.unlink(this.filepath);
  }


  async save(title, price, thumbnail) {
    try {
      const products = await this.read()
      const newProduct = {
        title,
        price,
        thumbnail,
        id: products.length + 1,
      };
      peliculas.push(newProduct);
      await fs.promises.writeFile(this.filepath, JSON.stringify(products, null, 2));
      return `Se ha agregado pelicula ${title}`;
    } catch (err) {
      console.log('error'.err);
    }

  }

  async getById(id) {
    id = Number(id);
    try {

      const productsSave = await fs.promises.readFile(this.filepath, "utf-8")
      const arrayProducts = JSON.parse(productsSave);
      //let peliFound =
      return arrayProducts.find((prod) =>
        prod.id === id) //? peli : undefined

      // );
      //await fs.promises.writeFile(this.filepath, JSON.stringify(peliFound))

      //console.log(peliFound);
    } catch (error) {

      console.log(error);
    }

  }

  async deleteById(id) {
    //await fs.promises.unlink(this.filepath)
    try {
      id = Number(id)
      let allProducts = await fs.promises.readFile(this.filepath, "utf-8")
      let productsWithId = JSON.parse(allProducts);

      let productsWithoutId = productsWithId.filter(newProduct => newProduct.id != id) //-1
      await fs.promises.writeFile(this.filepath, JSON.stringify(productsWithoutId))
      //console.log(peliculaSinId)  

    } catch (error) {

      console.log(error, "no funciona ");

    }

  }

  async updateById(id, newProduct) {
    try {
      id = Number(id);
      const allProducts = await fs.promises.readFile(this.filepath, "utf-8");
      const productsWithId = JSON.parse(allProducts);
      const productsUpdate = productsWithId.find(
        (prod) => prod.id === id
      );
      if (productsUpdate) {
        const index = productsWithId.indexOf(productsUpdate);
        const { title, price, thumbnail } = newProduct;

        productsWithId[index]['title'] = title;
        productsWithId[index]['price'] = price;
        productsWithId[index]['thumbnail'] = thumbnail;
        await fs.promises.writeFile(this.filepath, JSON.stringify(productsWithId));
        return true;
      } else {
        console.log(`ID ${id} no existe`);
        return null;
      }

    } catch (error) {
      `Error: ${error.code} | No reconoce (${id})`
    }
  }

  //Primera Entrega

  saveProduct(idCartSelected, idProduct) {
    try {
      const cartSelected =  this.getById(idCartSelected);
      if (cartSelected == null)
        return;
      const productSelected = products.getById(idProduct);
      if (productSelected == null)
        return;
      cartSelected.products.push(productSelected);
      this.save()
      return 'Se agregó el producto'
    } catch (err) {
      console.log(err)

    }
  }

  deleteProduct(idCartSelected, idProduct) {
    try {
      const cartSelected = this.getById(idCartSelected);
      if (cartSelected == null)
        return;
      const productToDelete = cartSelected.products.findIndex(product => product.id === idProduct);
      if (productToDelete == -1)
        return;
      cartSelected.products.splice(productToDelete, 1);
      this.save()
      return 'se eliminó el producto'
    } catch (err) {
      console.log(err)

    }

  }
}

// const main = async () => {
//   const manejadorDeArchivos = new Contenedor();
//   console.log("Leer: ", await manejadorDeArchivos.read());
  // console.log(await manejadorDeArchivos.guardar("Argentina 1985", 100, "immagen.png"));
  // console.log(await manejadorDeArchivos.guardar("Titanic", 200, "imagen.png"));
  // console.log(await manejadorDeArchivos.guardar("Documental Mundial", 300, "poster.png"));
  // console.log("Leer: ", await manejadorDeArchivos.leer());
  // console.log( await manejadorDeArchivos.getById(2));
  //  console.log( await manejadorDeArchivos.deleteById(2));
  //  console.log("Leer: ", await manejadorDeArchivos.leer())
  //  console.log( await manejadorDeArchivos.deleteById(1));
  //  console.log("Leer: ", await manejadorDeArchivos.leer())

  //     setTimeout( async () => {
  //         await manejadorDeArchivos.borrar();
  //     }, 5000);

  //     console.log("Leer: ", await manejadorDeArchivos.leer());
// }

//main();
