
// Import the Express module
const express = require("express");
const connectDB =require("./db")

// Create an instance of the Express application
const app = express();


// Middleware to parse JSON bodies
app.use(express.json());

// Define a route for the home page
app.get("/", (req, res) => {
    res.send("hello, world!");
});

// Start the server and listen on port 3000
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});

// Root route
app.get('/', (request, response) => {
    response.send('Welcome to my backend server');
});
//http methods;GET,POST,PUT,DELETE,PATCH

// About route
app.get('/about', (req, res) => {
    res.send('This is my about page');
});

// Contact route (should be a separate path)
app.get('/contact', (req, res) => {
    res.send('This is my contact page');
});

// Route parameters
app.get('/users/:id', (req, res) => {
    const userid = req.params.id;
    res.send('User ID is: ' + userid);


});

// Query parameters
app.get('/search', (req, res) => {
    const query = req.query.q;
    res.send('YOU SEARCHED FOR: ' + query);
});

// JSON response
app.get('/products', (req, res) => {
    const products = [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 200 },
        { id: 3, name: 'Product 3', price: 300 },
    ];
    res.json(products);
});
let products = []
//post request
app.post('/products', (req, res) => {
    const { name, price } = req.body;
    // Create new product
    const newProduct = {
        id: products.length + 1,
        name: name,
        price: price,

    }
    console.log(newProduct.name);

    // You might want to add validation or database logic here
  // Add the new product to the products array
products.push(newProduct);

// Send a success response with the newly created product
res.status(201).json({
  message: "Product has been created successfully",
  product: newProduct
});
 
    });

connectDB();














