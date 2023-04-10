const http = require("http")
const CPF = require('cpf');
const os = require("os");

// exemplos com a biblioteca OS
const arquitetura = os.arch();
const plataforma = os.platform();
const usuario = os.hostname();
const versao = os.version();

// config do servidor
const host = "localhost";
const port = 3000;

const arrayCPF = [];
for (let i = 0; i < 1000; i++) { // Cria 1000 cpfs aleatórios e salva dentro de uma array
    arrayCPF.push(CPF.generate()); // faz o push para inserir o cpf cada vez que é executado
}

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.write(`
    <p>${arquitetura}</p>
    <p>${plataforma}</p>
    <p>${usuario}</p>
    <p>${versao}</p>
    <p>cabeça de melhão</p>
    `);

    for (let i = 0; i < arrayCPF.length; i++) {
        res.write(`<p>${arrayCPF[i]}</p>`);
    }

    res.end();

})

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
})