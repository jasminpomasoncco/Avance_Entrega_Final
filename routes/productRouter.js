const { Router } = require('express');
const productsController = require('../controllers/productController');

const routerProducts = Router()

function auth(req, res, next) {
    if('admin' in req.headers) next()
    else {
        res.status(400)
        res.send('No admin')
    }
}


routerProducts.get('/:id', productsController.getProductById)
routerProducts.post('/', productsController.createProduct)
routerProducts.put('/:id', productsController.updateProduct)
routerProducts.delete('/:id', productsController.deleteProduct)

module.exports = routerProducts