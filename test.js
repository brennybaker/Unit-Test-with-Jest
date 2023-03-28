const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14,9);
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    const dollars = fromEuroToDollar(3.5)

    const expected = 3.5 * 1.2; 
    
     expect(fromEuroToDollar(3.5)).toBe(4.2); 
})

test("1 dollar should be 106 yen", function(){
    const { fromDollarToYen } = require('./app.js')
    
    const yen = fromDollarToYen(1)

    const expected = Math.floor(1/1.2 * 127.9); 
    
    expect(expected).toBe(yen);
})

test("500 yen should be 3 pounds", function(){

const { fromYenToPound } = require('./app.js')

const bp = fromYenToPound(500)

const expected = Math.floor((500/127.9)) * 0.8; 

expect(expected).toBe(bp);
})

