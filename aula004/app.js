const { mkdir, rmdir, existsSync } = require('fs');

if (!existsSync('./assets')) {
    mkdir('./assets', { recursive: true }, (err) => {
        if (err) {
            console.log(err);
            return;
        }
    });
} else {
    rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
            return;
        }
    });
}

console.log("Pasta assets criada com sucesso.");
