//Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.

function FirstReverse(str) {
    return str.split("").reverse().join("");
    }
    
    console.log(FirstReverse("Hello World and Coders"));

    // split function splits a string into an array of substrings.
    //reverse function reverses the order of the substrings in the array.
    // join function joins the array of substrings back into a string.
