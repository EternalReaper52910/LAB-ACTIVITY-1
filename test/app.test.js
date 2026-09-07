const test = require('node:test');
const assert = require('node:assert');
const { add, subtract } = require('../src/app');

test('Addition Functionality', (t) => {
    assert.strictEqual(add(2, 3), 5, '2 + 3 should equal 5');
    assert.strictEqual(add(-1, 1), 0, '-1 + 1 should equal 0');
    assert.strictEqual(add(0, 0), 0, '0 + 0 should equal 0');
});

test('Subtraction Functionality', (t) => {
    assert.strictEqual(subtract(10, 4), 6, '10 - 4 should equal 6');
    assert.strictEqual(subtract(5, 10), -5, '5 - 10 should equal -5');
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
});
