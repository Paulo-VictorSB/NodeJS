const http = require('http');

const server = http.createServer((req, res) => {
    res.write("<a href='https://paulobarbosadev.tech'>Acesse o meu portifólio!</a>'");
    res.end();
});

server.listen(3000, 'localhost', () => { console.log("Servidor iniciado") });