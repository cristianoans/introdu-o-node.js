const CPF = require('cpf'); // biblioteca para validacao e formatação de CPF
const fs = require("fs"); // biblioteca para manipulação de arquivos txt

// primeira parte
const arrayCPF = [];
for (let i = 0; i < 1000; i++) { // Cria 1000 cpfs aleatórios e salva dentro de uma array
    arrayCPF.push(CPF.generate()); // faz o push para inserir o cpf cada vez que é executado
}
const cpfString = arrayCPF.join('\n'); // armazena todo o array como uma única string, quebrando cada cpf por linha
fs.writeFileSync('./cpfs.txt', cpfString); // grava a string no arquivo txt

// segunda parte
const cpfs = fs.readFileSync('./cpfs.txt', 'utf-8'); // determina o caminho do arquivo e o formato do documento, lê como única string.
const arrayCpfs = cpfs.split('\n'); // converte a string em um array, usa a quebra de linha para determinar o index de cada item.

for (let cpf of arrayCpfs) { // for of para ler cada cpf dentro do array de cpf
  console.log(cpf); // imprime em tela
}