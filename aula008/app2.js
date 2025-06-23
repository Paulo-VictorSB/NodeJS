const express = require('express');
const app = express();
app.listen(3000);

// Rotas com parametros
//                                              GET
app.get('/home/:name', (req, res) => {
    console.log(req.params.name);
    res.send(`<h1>Seja bem vindo ${req.params.name}!</h1>`);
})
//                                              POST
app.use(express.urlencoded({ extended: true }));
// usar json para receber os requests
app.use(express.json());
app.post('/secret', (req, res) => {
    console.log(req.body);
    res.send("Ok");
})