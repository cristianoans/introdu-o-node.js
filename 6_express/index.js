const express = require('express');
const CPF = require('cpf');
const app = express();

// Home page
app.get('/', function(req, res) {
  res.send(`<h1>Home</h1>`);
});

// Config da porta
app.listen(3000, () =>{
  console.log(`Server iniciado http://localhost:3000/`)
});

// Exercício 1
app.get('/imc/:peso/:altura', (req, res) => {
  const peso = Number(req.params.peso);
  const altura = Number(req.params.altura);
  const imc = peso / (altura * altura); // gera o cálculo

  res.status(200).send(`<p>${imc.toFixed(2)}</p>`); // envia a resposta para o front-end
});

// Exercício 2
app.get('/funcionario/:cpf', (req, res) => {
  const {cpf} = req.params; // desestrutura para capturar o valor de cpf

  if(CPF.isValid(cpf)) { // verifica se o CPF é válido usando a biblioteca cpf
    res.status(200).send(`CPF: ${cpf} válido.`) // se válido envia status 200 e uma mensagem ao front
  } else {
    res.status(400).send(`CPF: ${cpf} inválido.`) // se inválido envia status 400 e uma mensagem ao front
  }
});

// Exercício 3
app.get('/cpfs/:numero', (req, res) => {
  const {numero} = req.params; // desestrutura para capturar a quantidade informada na requisição
  const array = []; // gera um array para 

  for (let i = 0; i < numero; i++) { // array para gerar a quantidade informada de cpfs
    array.push(CPF.generate());
  }

  // usei um map no array para imprimir na tela
  res.status(200).send(`${array.map(
    (cpf) => `<p>${cpf}</p>`
  ).join('\n')}`) // usei o Join para tirar as vírgulas e quebrar linha na página
});

// Exercício 4
app.get('/search', (req, res) => {
  const {nome} = req.query; // desestrutura para capturar o valor de nome

  if(nome) {
    res.status(200).send(`Bem-vindo: ${nome}`) // se válido envia status 200 e uma mensagem ao front
  } else {
    res.status(400).send(`Nome inválido ou inexistente`) // se inválido envia status 400 e uma mensagem ao front
  }

})

// Exercício 5
app.get('/soma', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if(a && b) {
    if(a !== NaN && b !== NaN){
      res.status(200).send(`O resultado da soma é ${a+b}`) // se válido envia status 200 e uma mensagem ao front
    } else {
      res.status(400).send(`A e B devem ser números`) // se inválido envia status 400 e uma mensagem ao front
    }
  } else {
    res.status(400).send(`A e B devem ser informados`) // se inválido envia status 400 e uma mensagem ao front
  }

})

// Exercício 6
app.get('/lang', (req, res)=>{
  const {idioma} = req.query;
  
  if(idioma) {
    if(idioma === 'pt-br') {
      res.status(200).send(`Bem-vindo`)
    } else if (idioma === 'en') {
      res.status(200).send(`Welcome`)
    } else{
      res.status(400).send(`Idioma inválido`)
    }

  } else {
    res.status(400).send(`Idioma deve ser informado`)
  }
})
