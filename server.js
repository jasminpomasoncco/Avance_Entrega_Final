const express = require('express');
const app = express()

const router_products = require('./routes/productRouter')
const router_shoppingCart = require('./routes/shoppingCart')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use( express.static(__dirname + '/public'))

app.use('/api/products', router_products);
app.use('/api/shoppingCart', router_shoppingCart);


const PORT = 8080;

const connectedServer = httpServer.listen(PORT, function () {
    console.log(`Servidor Http con Websockets escuchando en el puerto ${connectedServer.address().port}`)
})
connectedServer.on('error', error => console.log(`Error en servidor ${error}`))