const express = require('express');
const app = express();
app.listen(3000);

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/', (req, res) => {
    res.redirect('/home');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
});

app.get('/services', (req, res) => {
    res.sendFile(__dirname + '/views/services.html');
});

app.use((req, res) => {
    res.status(404).sendFile(__dirname + '/views/404.html');
})