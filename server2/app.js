const { createServer } = require('http');
const { readFile } = require('fs');
const port = 3000;
const host = 'localhost';

const server = createServer((req, res) => {
    // set header
    res.setHeader('Content-Type', 'text/html');

    // content
    readFile(__dirname + '/html/pagina1.html', (err, data) => {
        if (err) {
            console.log("ERRO!");
            res.write("ERRO!");
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    })
});

server.listen(port, host, () => {
    console.log(`Servidor iniciado em http://${host}:${port}`);
});
