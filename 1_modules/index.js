// //Exercício 1
// const { tabela, calcularIMC } = require('./modulo_calculadora_imc')
// console.log(tabela(calcularIMC(89, 1.74)))

// // //Exercício 2
// const conversor = require('./modulo_conversor_temperaturas')
// console.log(conversor.celsiusToFahrenheit(20))
// console.log(conversor.fahrenheitToCelsius(75))

// Exercício 3
const autenticacao = require('./modulo_autenticacao')
const autenticado = autenticacao('jose@gmail.com', 'jose')
if (autenticado){
    console.log('Autenticado')
} else {
    console.log('Não autenticado')
}