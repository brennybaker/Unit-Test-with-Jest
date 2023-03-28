const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

let oneEuroIs = {
    "JPY": 127.9, 
    "USD": 1.2, 
    "GBP": 0.8, 
}

const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;

}

const fromDollarToYen = function(valueInDollar){     
     let valueInYen = Math.floor(1/1.2 * 127.9);
     return valueInYen;
}

const fromYenToPound = function(valueInYen){
    let valueInBp = Math.floor((500/127.9)) * 0.8;
    return valueInBp;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound}