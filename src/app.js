/**
 * DevSecOps Lab Activity 1 - Simple Calculator Module
 * Branch: main (Base arithmetic functions)
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

// Simple CLI execution check
if (require.main === module) {
    console.log("=== Simple Calculator Application ===");
    console.log(`Add (5 + 3): ${add(5, 3)}`);
    console.log(`Subtract (10 - 4): ${subtract(10, 4)}`);
}

module.exports = {
    add,
    subtract
};
