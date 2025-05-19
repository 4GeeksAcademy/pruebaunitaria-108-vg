const {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound} = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9)
    expect(total).toBe(23)
})

test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(dollars).toBe(parseFloat(expected.toFixed(2))); 
})

test("One dollar should be yen ", function() {
    const yen = fromDollarToYen(5);
    const expected = 5 * (1 / 1.07) * 156.5
    expect(yen).toBe(parseFloat(expected.toFixed(2))); 
})

test("One yen should be pound", function() {
    const pound = fromYenToPound(1000);
    const expected = 1000 * (1 / 156.5) * 0.87
    expect(pound).toBe(parseFloat(expected.toFixed(2))) 
})