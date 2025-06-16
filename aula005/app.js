const { writeFile, existsSync, mkdir } = require('fs');

const logs = [
    "📦 Sistema iniciado com sucesso.",
    "✅ Conexão com o banco de dados estabelecida.",
    "👤 Usuário 'admin' autenticado.",
    "📁 Arquivo 'dados.csv' carregado corretamente."
];

const dir = './logs';
const filePath = `${dir}/logs.log`;

if (!existsSync(dir)) {
    mkdir(dir, { recursive: true }, (err) => {
        if (err) {
            console.error("Erro ao criar diretório:", err);
            return;
        }
        escreverLogs();
    });
}

escreverLogs();

function escreverLogs() {
    logs.forEach((log) => {
        writeFile(filePath, log + '\n', { flag: 'a+' }, (err) => {
            if (err) console.error("Erro ao escrever log:", err);
        });
    });
}