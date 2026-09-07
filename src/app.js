/**
 * DevSecOps Lab Activity 1 - Simple Calculator Module
 * Branch: feature/multiply-divide (Extended arithmetic functions)
 */

function add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('Inputs must be numbers');
    }
    return a + b;
}

function subtract(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('Inputs must be numbers');
    }
    return a - b;
}

function multiply(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('Inputs must be numbers');
    }
    return a * b;
}

function divide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('Inputs must be numbers');
    }
    if (b === 0) {
        throw new RangeError('Division by zero is not allowed');
    }
    return a / b;
}

// Simple CLI execution check
if (require.main === module) {
    console.log("=== Simple Calculator Application ===");
    console.log(`Add (5 + 3): ${add(5, 3)}`);
    console.log(`Subtract (10 - 4): ${subtract(10, 4)}`);
    console.log(`Multiply (4 * 7): ${multiply(4, 7)}`);
    console.log(`Divide (20 / 4): ${divide(20, 4)}`);
}

module.exports = {
    add,
    subtract,
    multiply,
    divide
};
