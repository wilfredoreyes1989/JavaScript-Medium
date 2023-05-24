

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
// arrLength([]) -> 0

function arrLength(arr) {
    return arr.length;
}

console.log(arrLength([1,2,3]));
console.log(arrLength([5,0,-4,1]));
console.log(arrLength([]));


// Question 3. Get the last element in an array
// Given an array, return the first element
// Example -
// lastElem([3,2,0,6,2]) -> 2
// lastElem(['dog','cat','ball']) ->
// lastElem([null,5,false]) -> false

function arrLength(arr) {
    return arr[arr.length -1];
}

console.log(arrLength([3,2,0,6,2]))
console.log(arrLength(['dog', 'cat', 'ball']));
console.log(arrLength([null, 5, false]));