let products = {
  product1: {
     id: 1,
     name: "Notebook",
     brand: "Asus",
     price: 150000,
     thumbnail: "https://mexx-img-2019.s3.amazonaws.com/40841_7.jpeg?v652?v854"
     
   },
   product2:{
     id:2,
     name: "Monitor",
     brand: "Asus",
     price: 60000,
     thumbnail:"https://m.media-amazon.com/images/I/61+CPlkk+OL._AC_SY450_.jpg"
   },
   product3:{
     id:3,
     name: "Combo teclado y mouse Gamer",
     brand: "Razer",
     price: 10000,
     thumbnail:"https://tiendalider.com.ar/wp-content/uploads/2021/01/Razer-Essential-Combo-600x600.jpg"
  },
   product4:{
     id:4,
     name: "Auriculares Inalambricos",
     brand: "Sony",
     price: 5000,
     thumbnail:"https://images.fravega.com/f300/95d11723d52ea94a869d3e744825e257.jpg.webp"
   },
}

exports.create = function (req, res) {
  let newProduct = req.body;
  products["producto" + newProduct.id] = newProduct;
  console.log('--> Despues del Post, products: /n' + JSON.stringify(products, null, 4));
  res.end('Post exitoso: /n' + JSON.stringify(newProduct, null, 4));
};

exports.findAll = function (req, res) {
  console.log('--> Obtener todos :/n' + JSON.stringify(products, null, 4));
  res.end('Obtener todos los productos: /n' + JSON.stringify(products, null, 4));
};

exports.findOne = function (req, res) {
  let product = products["product" + req.params.id];
  console.log('--> Encontrar un producto :/n' + JSON.stringify(product, null, 4));
  res.end('Encontrar un producto: /n' + JSON.stringify(product, null, 4));
};

exports.update = function (req, res) {
  let id = parseInt(req.params.id);
  let updatedProduct = req.body;
  if (products["product" + id] != null) {
    products["product" + id] = updatedProduct;

    console.log('-->  Actualizacion exitosa, products: /n' + JSON.stringify(products, null, 4));

    res.end('Actualizacion exitosa: /n' + JSON.stringify(updatedProduct, null, 4));
  } else {
    res.end('El producto no existe: /n' + JSON.stringify(updatedProduct, null, 4));
  }
};

exports.delete = function (req, res) {
  let deleteProduct = products["product" + req.params.id];
  delete products["product" + req.params.id];
  console.log('-->  Despues de eliminar, lista de productos: /n' + JSON.stringify(products, null, 4));
  res.end('Producto eliminado: /n' + JSON.stringify(deleteProduct, null, 4));
};