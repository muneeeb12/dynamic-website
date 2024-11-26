// multiply.js
function multiplyNumbers(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        throw new Error("Invalid input. Both inputs must be numbers.");
    }
    return num1 * num2;
}

module.exports = { multiplyNumbers };
