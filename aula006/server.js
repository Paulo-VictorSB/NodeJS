const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 3000;
const host = 'localhost';

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    let view = '';
    res.statusCode = 200;
    switch (req.url) {
        case '/':
            view = 'home';
            break;
        case '/home':
            res.setHeader('Location', '/');
            res.statusCode = 301;
            res.end();
        case '/services':
            view = 'services';
            break;
        case '/about':
            view = 'about';
            break;
        default:
            view = '404';
            res.statusCode = 404;
            break;
    }

    const filePath = path.join(__dirname, 'pages', view + '.html');

    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.log('Erro ao ler o arquivo:', err);
            res.statusCode = 500;
            res.end('<h1>Erro interno no servidor</h1>');
        } else {
            res.end(data);
        }
    });
});

server.listen(port, host, () => {
    console.log(`Servidor iniciado em http://${host}:${port}`);
});
