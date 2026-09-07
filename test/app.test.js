const test = require('node:test');
const assert = require('node:assert');
const { add, subtract, multiply, divide } = require('../src/app');

test('Addition Functionality', (t) => {
    assert.strictEqual(add(2, 3), 5, '2 + 3 should equal 5');
    assert.strictEqual(add(-1, 1), 0, '-1 + 1 should equal 0');
    assert.strictEqual(add(0, 0), 0, '0 + 0 should equal 0');
});

test('Subtraction Functionality', (t) => {
    assert.strictEqual(subtract(10, 4), 6, '10 - 4 should equal 6');
    assert.strictEqual(subtract(5, 10), -5, '5 - 10 should equal -5');
});

test('Multiplication Functionality', (t) => {
    assert.strictEqual(multiply(4, 7), 28, '4 * 7 should equal 28');
    assert.strictEqual(multiply(-2, 5), -10, '-2 * 5 should equal -10');
    assert.strictEqual(multiply(0, 99), 0, '0 * 99 should equal 0');
});

test('Division Functionality', (t) => {
    assert.strictEqual(divide(20, 4), 5, '20 / 4 should equal 5');
    assert.strictEqual(divide(-15, 3), -5, '-15 / 3 should equal -5');
});

test('Division by Zero Error Handling', (t) => {
    assert.throws(() => divide(10, 0), {
        name: 'RangeError',
        message: 'Division by zero is not allowed'
    });
});

test('Input Validation & Error Handling', (t) => {
    assert.throws(() => add('5', 2), {
        name: 'TypeError',
        message: 'Inputs must be numbers'
    });
    assert.throws(() => subtract(10, null), {
        name: 'TypeError',
        message: 'Inputs must be numbers'
    });
    assert.throws(() => multiply('abc', 3), {
        name: 'TypeError',
        message: 'Inputs must be numbers'
    });
});
