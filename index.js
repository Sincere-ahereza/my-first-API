const express =require ('express');

const application =express();

const PORT =5000

application.get('/',(request,response) =>{
response.send('welcome to my backend server');    
});

application.listen(PORT, () =>{
    console.log("server is running on port" + PORT)
});




