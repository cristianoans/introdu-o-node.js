function celsiusToFahrenheit (c){
    return ((c*1.8)+32)
}

function fahrenheitToCelsius (f){
    return ((f-32)*5/9)
}

module.exports = {celsiusToFahrenheit, fahrenheitToCelsius}