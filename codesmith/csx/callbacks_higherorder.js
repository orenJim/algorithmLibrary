// CALLBACKS AND HIGHER-ORDER FUNCTIONS



// PLURALIZE
// create a function that takes an array of strings as input and returns a new array with "s" added to end of each string in array// ADD CODE HERE
function pluralize (array) {
  const output = [];
  for (let i = 0; i < array.length; i += 1) {
    output.push(array[i] + "s");
  }
  return output;
}

// Uncomment these to check your work!
const animals = ["dog", "cat", "tree frog"];
console.log(pluralize(animals)); // should log: ["dogs", "cats", "tree frogs"]



// MAP
// create a function subtractTwo that accepts a number and returns a number minus 2; then create a function map that takes two inputs, 1. array of numbers and 2. callback function; have map return a new array filled with numbers that are the result of using callback to each element of input array
function subtractTwo (num) {
  return num - 2;
}

function map (array, callback) {
  const output = [];
  for (let i = 0; i < array.length; i += 1) {
    output.push(subtractTwo(array[i]));
  }
  return output;
}

// Uncomment these to check your work!
console.log(typeof subtractTwo); // should log: 'function'
console.log(typeof map); // should log: 'function'
console.log(map([3,4,5], subtractTwo)); // should log: [ 1, 2, 3 ]



// forEach
// create a function forEach that takes two inputs, array and callback, and invokes the callback once for each element of the array. forEach does not return anything. then rebuild map, but instead of using for loop, use forEach.
// ADD CODE HERE
function forEach (array, callback) {
	for (let i = 0; i < array.length; i += 1) {
    callback(array[i], i, array);
  }
};

function map (array, callback) {
  let output = [];
  function changes (value) {
    output.push(callback(value));
  }
  forEach (array, changes);
	return output;
};



// Uncomment these to check your work!
console.log(typeof forEach); // should log: 'function'
forEach(['a','b','c'], i => console.log(i)); // should log: 'a', 'b', 'c'
console.log(typeof map); // should log: 'function'
console.log(map([3,4,5], n => n - 2)); // should log: [1, 2, 3]



// REDUCE
// construct your own reduce function that takes in an array, callback, and initial value
// ADD CODE HERE
function reduce (array, callback, initval) {
  let result = initval;
  for (let i = 0; i < array.length; i += 1) {
    result = callback(result, array[i]);
  }
  return result;
}

// more complete way
function reduce (array, callback, initval) {
  if (Array.isArray(array)) {
    let result;
    if (initval === undefined) {
      result = array[0];
      array = array.slice(1);
    }
    else {
      result = initval;
    }
    array.forEach(function (el, index, arr) {
      result = callback(result, el, index, arr);
    });
    result result;
  }
  return 'First argument should be an array';
}

// Uncomment these to check your work!
var nums = [4, 1, 3];
var add = function(a, b) { return a + b; }
console.log(reduce(nums, add, 0)); // should log 8



// INTERSECTION
// create a function that compares input arrays and returns a new array with elements found in all inputs
function intersection (array) {
  const result = [];
  const tracker = {};
  array.forEach(function (element) {
    for (let i = 0; i < array[element]; i += 1) {
      console.log(array[element]);
    }
  });
}