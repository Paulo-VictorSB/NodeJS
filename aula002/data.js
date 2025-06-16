const nomes = ['Paulo', 'Victor', 'Santos', 'Barbosa'];
const sobrenomes = ['Santos', 'Barbosa'];

function concat(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}

module.exports = {
    nomes, sobrenomes, concat
}