function calcularIMC (peso, altura) {
    return peso / (altura * altura);
}

function tabela(IMC) {

    if (IMC < 18.5) {
        return(`Abaixo do peso, seu IMC é ${IMC.toFixed(2)}`);
    } else if (IMC >= 18.5 && IMC <= 24.9) {
        return(`Peso Normal, seu IMC é ${IMC.toFixed(2)}`);
    } else if (IMC >= 25.0 && IMC < 30) {
        return(`Acima do peso, seu IMC é ${IMC.toFixed(2)}`);
    } else if (IMC >= 30) {
        return(`Obeso!!! seu IMC é ${IMC.toFixed(2)}`);
    }

}

module.exports = {calcularIMC, tabela};