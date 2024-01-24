// console.log('Hello node!')

// const info = require('./modules/info.js')
// console.log(info)

const express = require('express');
const app = express();

app.use(express.json());

const PORT = 5000;

const products = require('./data.js')
console.log(products)

app.get('/this/is/my/route', (request, response)=>{
    response.send(products)
})

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

  

app.get('/this/is/my/route/:id', (request, response) => {
    const product = products.find((prod) => prod.id === parseInt(request.params.id))
    if(!product) {
        response.status(404).send('product not found!')
    }
    response.send(product)
})

app.post('/this/is/my/route/', (request, response) => {
    const newProduct = {
        id: 5,
        title: 'Watch'
    }
    
    products.push(newProduct)
    response.send(products)
    if(!product) {
        response.status(404).send('product not found!')
    }
})

app.put('/this/is/my/route/:id', (request, response) => {
    const product = products.find((prod) => prod.id === parseInt(request.params.id))
    if(!product) {
        response.status(404).send('product not found!')
    }
    product.title = request.body.title
    response.send(product)
})


app.delete('/this/is/my/route/:id', (request, response) => {
    const product = products.find((prod) => prod.id === parseInt(request.params.id))
    if(!product) {
        response.status(404).send('product not found!')
    }
    const productIndex = products.indexOf(product)
    products.splice(productIndex, 1)
    response.send(product)
})


app.listen(PORT || 8015, () => {
    console.log('server is running on port' + PORT)
});