

// Question 1. Falsy or Truthy?
// Given two values, return the first one if it is falsy, otherwise return the second one.
// Example -
// filterOutFalsy(0,500) -> 0
// filterOutFalsy(false,100) -> false
// filterOutFalsy([true,'Dog']) -> 'Dog'

function filterOutFalsy(elem1, elem2) {
    return (!elem1) ? elem1 : elem2;
}

console.log(filterOutFalsy(0,500));
console.log(filterOutFalsy(false,100));
console.log(filterOutFalsy([true,'Dog']));


// Question 2. Return the length of any given array
// Given an array, return its length
// Example -
// arrLength([1,2,3]) -> 3
// arrLength([5,0,-4,1]) -> 4
// arrLength([0]) -> 0

function arrLength(arr) {
    return arr.length;
}

console.log(arrLength([1,2,3]));
console.log(arrLength([5,0,-4,1]));
console.log(arrLength([0]));


// Question 3. Get the last element in an array
// Given an array, return the last element
// Example -
// lastElem([3,2,0,6,2]) -> 2
// lastElem(['dog','cat','ball']) -> ball
// lastElem([null,5,false]) -> false

function arrLength(arr) {
    return arr[arr.length -1];
}

console.log(arrLength([3,2,0,6,2]))
console.log(arrLength(['dog', 'cat', 'ball']));
console.log(arrLength([null, 5, false]));


// Question 4. Find the sum of an array
// Given an arrary, return the sum of every element
// Example - 
// arrSum([2,2,2]) -> 6
// arrSum([100,200,500]) -> 800
// arrSum([0,-5,-10]) -> -15

function arrSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; ++i) {
        sum = sum + arr[i];
    }
    return sum
}

console.log(arrSum([2,2,2]));
console.log(arrSum([100,200,500]));
console.log(arrSum([0,-5,-10]));


// Question 5. Add up the numbers from a single numnber 
// Given a number, add up all the numbers from one to the that is given.
// An input of 4 will give you 1 + 2 + 3 + 4, which equals 10.
// Example - 
// progressiveSum(3) -> 6
// progressiveSum(4) -> 10
// progressiveSum(600) -> 180300

function progressiveSum(num) {
    let sum = 0;
    for (let i = 1; i <= num; ++i) {
        sum = sum + i;
    }
    return sum
}

console.log(progressiveSum(3));
console.log(progressiveSum(4));
console.log(progressiveSum(600));