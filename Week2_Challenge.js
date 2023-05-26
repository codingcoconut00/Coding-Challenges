//Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
numsArray = [0, 1, 2, 3, 4, 5, 6,];
let min = numsArray[0];
let max = numsArray[0];

function findMinMax(numsArray) {
    for (let i = 0; i < numsArray.length; i++) {
        if (numsArray[i] < min) {
            min = numsArray[i];

        }
        if (numsArray[i] > max) {
            max = numsArray[i];
        }
    }}
    return [min, max];

    lrgNumsArray = [10, 20, 30, 40, 50, 60,];
    lowVal = lrgNumsArray[0];
    highVal lrgNumsArray[0]
    function findMinMax(lrgNumsArray) {
    for (let i = 0; i < lrgNumsArray.length; i++) {
        if (lrgNumsArray[i] < lowVal) {
            lowVal = lrgNumsArray[i];
        }
        if (lrgNumsArray[i] > highVal) {
            highVal = lrgNumsArray[i];
        }
    }
            console.log("The lowest value is " + lowVal)
        console.log("The highest value is " + highVal)

    return [lowVal, highVal];}
