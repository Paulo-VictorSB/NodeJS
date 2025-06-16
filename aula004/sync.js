const { readFileSync } = require("fs");

try {
    const file = readFileSync('./dados.csv');
    const data = file.toString();
    console.log(data);
} catch (err) {
    console.log("Ocorreu um erro inesperado com o servidor: " + err.code);
}
