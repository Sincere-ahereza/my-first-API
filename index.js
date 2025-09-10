const express = require('express');

const application = express();

const PORT = 5000

application.get('/', (request, response) => {
    response.send('welcome to my backend server');
});

application.listen(PORT, () => {
    console.log("server is running on port" + PORT)
});
//http methods:GET,POST,PUT,DELETE,PATCH
application.get('/about', request, res => {
    res.send('this is my about page')
});
application.get('/about', request, res => {
    res.send('this is my contact page')
});
//route parameters
application.get('/users/:id', (req, res) => {
    res.send('user ID is: ' + userID)
});
//query paeameters
application.get('/search', (req, res) => {
    const query = req.query.q;
    res.send('YOU SEARCHED FOR:' + query)
})

//JSON response
application.get('/products', (req, res) => {
    const products =[
        { id: 1, name: 'product 1', price: 100},
    { id: 2, name: 'product2', price: 200 },
    { id: 3, name: 'product3', price: 300 },

    ];
    res.json(products)
})




