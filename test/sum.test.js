// Add the unit tests of the sum function here
const sum = require('../src/sum');
const multiplyBy = require('../src/sum');
const a = 1;
const b = 2;
const x = "x";


    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });
    test('adds 1 + 2 to equal 3', () => {
        expect(() => {
            sum(1, x).toThrow()
        })
    });

test('multiply num1 by num2', () => {
    expect(multiplyBy())
})