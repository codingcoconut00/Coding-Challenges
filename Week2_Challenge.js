//Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
numsArray = [ 1, 2, 3, 4, 5, 6,];
let min = numsArray[5];
let max = numsArray[1];

function findMinMax(numsArray) {
    for (let i = 0; i < numsArray.length; i++) {
        if (numsArray[i] < min) {
            min = numsArray[i];
        }
        
        if (numsArray[i] > max) {
            max = numsArray[i];
        }
    }
    return [min, max];
}
    console.log (findMinMax(numsArray));
