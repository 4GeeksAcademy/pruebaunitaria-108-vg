function sum(a, b) {
    return a + b;
}

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

 
const fromEuroToDollar = function(valueInEuro) {
let valueInDollar = valueInEuro * oneEuroIs.USD
return parseFloat(valueInDollar.toFixed(2)) 
};


const fromDollarToYen = function(valueInDollar) {
    const oneDolarToEuro = 1 / oneEuroIs.USD
    const oneDollarToYen = oneDolarToEuro * oneEuroIs.JPY
    
    let valueInYen = valueInDollar * oneDollarToYen
    return parseFloat(valueInYen.toFixed(2))
}

const fromYenToPound = function(valueInYen) {
    const oneYenToEuro = 1 / oneEuroIs.JPY
    const oneYenToPound = oneYenToEuro * oneEuroIs.GBP

    let valueInPound =valueInYen * oneYenToPound
    return parseFloat(valueInPound.toFixed(2))
}

module.exports = { sum , fromEuroToDollar, fromDollarToYen, fromYenToPound}
