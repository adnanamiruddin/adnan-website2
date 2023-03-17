// make function to calculate numbers
function calculateNumbers(num1, num2, num3) {

    // make a variable to store the result
    let result = 0;

    // make a variable to store the numbers in an array
    let numbers = [num1, num2, num3];

    // make a loop to go through the array
    for (let i = 0; i < numbers.length; i++) {

        // make a condition to check if the number is even
        if (numbers[i] % 2 === 0) {

            // add the number to the result
            result += numbers[i];
        }
    }

    // return the result
    return result;
}