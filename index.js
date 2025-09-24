
const express = require('express');

const application = express();
const PORT = 3000;

// Middleware to parse JSON bodies
application.use(express.json());

// Root route
application.get('/', (request, response) => {
    response.send('Welcome to my backend server');
});
//http methods;GET,POST,PUT,DELETE,PATCH

// About route
application.get('/about', (req, res) => {
    res.send('This is my about page');
});

// Contact route (should be a separate path)
application.get('/contact', (req, res) => {
    res.send('This is my contact page');
});

// Route parameters
application.get('/users/:id', (req, res) => {
    const userid = req.params.id;
  res.send('User ID is: ' + userid);

    
});

// Query parameters
application.get('/search', (req, res) => {
    const query = req.query.q;
    res.send('YOU SEARCHED FOR: ' + query);
});

// JSON response
application.get('/products', (req, res) => {
    const products = [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 200 },
        { id: 3, name: 'Product 3', price: 300 },
    ];
    res.json(products);
});
let products=[]

// POST request to add a new product
app.post('/products', (req, res) => {
    const { name, price } = req.body;

    // Validate input
    if (!name || !price) {
        return res.status(400).json({ error: 'Name and price are required.' });
    }

    // Create new product
    const newProduct = {
        id: products.length + 1,
        name: name,
        price: price
    };

    // Add to products array
    products.push(newProduct);

    // Respond with the newly created product
    res.status(201).json(newProduct);
});






