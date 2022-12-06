const express = require('express');
const { engine } = require('express-handlebars')

const app = express()

const router_products = require('./routes/productRouter')
const Product =  require('./containers/containerProduct');
const product = new Product('data/products.txt');

app.use( express.static('/public'))
app.use(express.urlencoded({ extended: true }))
app.set('views', './public/views')
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.use(express.json());


app.get('/', async (req, res) => {
  const Allproducts= await product.getAll();
    res.render('products');
})


app.use('/api/products', router_products);
//app.use('/api/shoppingCart', router_shoppingCart);


const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});
server.on('error', (error) => console.error(error));
