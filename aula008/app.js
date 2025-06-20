const express = require('express');
const app = express();

const body = {
    status: "success",
    code: 200,
    data: null
};

app.get('/home', (req, res) => {
    body.data = "home";
    res.send(
        body
    );
})

app.get('/', (req, res) => {
    res.redirect('/home');
})

app.get('/about', (req, res) => {
    body.data = "about";
    res.send(body);
})

app.use((req, res) => {
    body.status = "erro";
    body.code = 404;
    body.data = "rota não encontrada.";
    res.status(404).send(body);
})

app.listen(3000);