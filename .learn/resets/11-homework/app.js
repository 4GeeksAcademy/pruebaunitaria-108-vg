const sum = (a,b) => {
    return a + b
}

const result = sum(7, 3);
console.log(result);

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

 
const fromEuroToDollar = function(valueInEuro) {
    
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    
    return valueInDollar;
}

 
const fromDollarToYen = function(valueInDollar) {
    const oneDollarToYen = 
    
    let valueInYen = valueInDollar * oneDollar.JPY;
    
    return valueInYen;
}


 
const fromYenToPound = function(valueInPound) {
    const one
    
    let valueInPound = valueInPound * oneYenIs.GBP;
    
    return valueInPound;
}

module.exports = { sum , fromEuroToDollar, fromDollarToYen, fromYenToPound}
