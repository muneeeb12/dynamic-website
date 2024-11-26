// multiply.test.js
const { multiplyNumbers } = require('./multiply');

// Test cases
const tests = [
    { input: [2, 3], expected: 6 },
    { input: [0, 5], expected: 0 },
    { input: [-2, 4], expected: -8 },
    { input: [1.5, 2], expected: 3 },
    { input: [NaN, 3], expectedError: true },
];

let allTestsPassed = true;

tests.forEach(({ input, expected, expectedError }, index) => {
    try {
        const result = multiplyNumbers(...input);
        if (expectedError) {
            console.error(`Test ${index + 1} failed. Expected an error but got ${result}`);
            allTestsPassed = false;
        } else if (result !== expected) {
            console.error(`Test ${index + 1} failed. Expected ${expected} but got ${result}`);
            allTestsPassed = false;
        } else {
            console.log(`Test ${index + 1} passed.`);
        }
    } catch (error) {
        if (expectedError) {
            console.log(`Test ${index + 1} passed (expected error).`);
        } else {
            console.error(`Test ${index + 1} failed. Unexpected error: ${error.message}`);
            allTestsPassed = false;
        }
    }
});

if (!allTestsPassed) {
    console.error('Some tests failed.');
    process.exit(1);
} else {
    console.log('All tests passed.');
}
