const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

module.exports = { sum };

let oneEuroIs = {
    "JPY": 127.9, 
    "USD": 1.2, 
    "GBP": 0.8, 
}

const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;

}

module.exports = { sum, fromEuroToDollar }

let oneDollarIs = {
    "JPY": 130.75,
    "EUR": 0.9,
    "GBP": 0.8,
}

const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * 130.75;
    return valueInYen;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen }