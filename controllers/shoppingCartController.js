const ShoppingCart =  require('../containers/containerShoppingCart');
const cart = new ShoppingCart('data/products.txt');

const Product =  require('../containers/containerProduct');
const product = new Product('data/products.txt');


const getCartByIdProduct = async(req, res) => {
    try {
        const productFound = await product.getById(+req.params.id);

        if(!productFound){
            return res.json({
                error: 'Product not found in cart'
            })
        }

        return res.json({
            producto: productFound
        })
    } catch (error) {
        res.status(500).json({
            error: 'Something went wrong'
        })
    }
}

const createCart = async(req, res) => {
    try {
        const cartCreated = await cart.save(req.body);
        res.json({
            'cart':cartCreated
        })
        
    } catch (error) {
        res.status(500).json({
            error: 'Something went wrong'
        })
    }
}

const createCartByIdProduct = async(req, res) => {
    try {
        const cartCreated = await product.save(req.body);
        res.json({
            'cart':cartCreated
        })
        
    } catch (error) {
        res.status(500).json({
            error: 'Something went wrong'
        })
    }
}

const deleteProductByIdProduct = (req, res) => {
    try {
        product.deleteById(+req.params.id)
        return res.json({
            message: 'Product deleted'
        })
    } catch (error) {
        res.status(500).json({
            error: 'Something went wrong'
        })
    }
}


const deleteCart = (req, res) => {
    try {
        product.deleteById(+req.params.id)
        return res.json({
            message: 'Product deleted'
        })
    } catch (error) {
        res.status(500).json({
            error: 'Something went wrong'
        })
    }
}


module.exports = {
    getCartByIdProduct,
    createCart,
    deleteCart,
    createCartByIdProduct,
    deleteProductByIdProduct
}