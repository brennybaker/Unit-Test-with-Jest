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

test("One dollar should be 127.9 yen", function(){
    const { fromDollartoYen } = require('./app.js')

    const yen = fromDollartoYen(127.9)

    const expected = 127.9 * 1.2;

    expect(fromDollartoYen(127.9).toBe(153.48))
})