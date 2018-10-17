// CS Prep Day 2

// Objects & Arrays
// Objects
// Objects are Javascript's more complex datatype. They can be considered wrappers for other data, either primitives (strings, numbers, booleans, null, and undefined) or even other objects. Objects have a simple structure, they are a collection of property names (also referred to as keys) separated by and each key has a corresponding value:

// var myObj = {
//   someProp: "a string value",
//   secondProp: 2
// };
// Each property value is actually converted to a string by javascript, so this is also valid:

// var myObj = {
//   "someProp": "a string value",
//   "secondProp": 2
// };
// Let's make our first object!



////////////////////////////
//     Challenge 1
////////////////////////////

// Make an obj named myObj with three properties: foo, bar, and baz.
// give foo the value "hello".
// give bar the value "world".
// and give baz the value true.

const myObj = {
  foo: 'hello',
  bar: 'world',
  baz: true,
};



////////////////////////////
//     Challenge 2
////////////////////////////

// make an object named myNestedObj
// give it a property named outer with the string "outer value" as its value
// and a property innerObj with the value of an object
// give this innerObj a property "inner" with the value "inner value"
// Property Access
// Well it's great that we can store data in objects, but what use is that if we can't retrieve it? Luckily enough Javascript makes accessing property values really easy. There are two ways to access the values stored in objects, they are bracket syntax:

// var name = {
//   first: "Will",
//   last: "Sentence"
// };
// console.log(name["first"]); // logs => "Will"
// or we can use whats called dot notation:

// var name = {
//   first: "Jerry",
//   last: "Meow"
// };
// console.log(name.last); // logs => "Meow"
// Let's try accessing some object properties in a challenge:

const myNestedObj = {
  outer: 'outer value',
  innerObj: {
    inner: 'inner value',
  },
};



////////////////////////////
//     Challenge 3
////////////////////////////

// create an object named team with two properties, partner1 and partner2
// write a function sayTeamNames that accepts a single parameter teamObj
// have that sayTeamNames log both partner names separated by ' and '
// call sayTeamNames with your team object

const team = {
  partner1: 'Sam',
  partner2: 'Jim',
};

function sayTeamNames(teamObj) {
  console.log(teamObj['partner1'] + ' and ' + teamObj['partner2']);
}

sayTeamNames(team);



////////////////////////////
//     Challenge 4
////////////////////////////

// For loops allow us to repeat actions multiple times. A very specific type of for loop called a for.. in loop allows us to loop through the properties of an object. The for...in loop specifies a variable that is assign the value of a key on each iteration. the general structure is as follows:

// for (var property in someObject) {     
//   // you can access the property values 
//   // with someObject[property]   
// }
// Display the message contained in myLoopedObj by logging each property value using a for...in loop

const myLoopedObj = {
  key1: 'wow',
  key2: 'you',
  key3: 'did',
  key4: 'it!',
};

for (let key in myLoopedObj) {
  console.log(myLoopedObj[key]);
};

// Javascript has some objects built in with useful functions. The Math object in javascript has a collection of functions that can be used for common math operations. Let's explore some of the functions in a challenge:



////////////////////////////
//     Challenge 5
////////////////////////////

// log the result of using Math.floor(1.5) and Math.floor(2.3) to see what it does
// log the result of calling Math.ceil(1.5) and Math.ceil(2.3) to see what it does
// Math.random() returns a random number from 0-1, log the result of calling it twice
// Math.sign(num) returns a 1 if a number is positive, 0 if a number is zero, and -1 if a number is negative. log the result of calling Math.sign on a negative number and a positive number
// Math.max(num1, num2, ..etc) will return the higher number, log the result of calling Math.max(10, 3)
// Math.min(num1, num2, ...etc) will return the smallest of all the numbers passed in. Log the result of calling Math.min() with three numbers of your choosing
// Math.pow(a, x) will return the result of a to the xth power, log the result of 4 to the 2nd power

console.log(Math.floor(1.5));
console.log(Math.floor(2.3));
console.log(Math.ceil(1.5));
console.log(Math.ceil(2.3));



// Arrays

////////////////////////////
//     Challenge 6
////////////////////////////

// Arrays are special types of objects with sequential integers as keys (referred to as indices). They are are different from regular objects in that they reflect an ordering of their values. They are created using a bracket syntax, with values being separated by commas:

// var arr = [1, 2, "hello", "there", true]
// An array may contain values of any data type, even other arrays! (ex string, number, boolean, object, array, etc)

// make an array named myFirstArray and give it three elements

const myFirstArray = [1, 2, 3];



////////////////////////////
//     Challenge 7
////////////////////////////

// All items in an array have a sequential index starting at the number 0. This index may be used to access an element at a specific position in the array. arr[0] would return the first item in the array. Arrays have a special property called length that indicates the count of the number of items contained within the array. This length value is always one larger than the number of items contained in the array, because the length counts the number of items contained starting with 1

// Knowing this, use the length property to log the last item in someArray. The element can be accessed using bracket notation:
// array[someIndex]

const someArray = [0, 1, 2, 3, 4, 'you found me!'];
const lastItemInSomeArray = someArray[someArray.length - 1];



////////////////////////////
//     Challenge 8
////////////////////////////

// Another type of for loop can be used to declare a iterator (most commonly named i) and increment it on each loop. This loop will stop when the index is equal to the length of the array. Use a for loop to print out the array values in someArray

for (let i = 0; i < array.length; i += 1) {
  console.log(i);
}



////////////////////////////
//     Challenge 9
////////////////////////////

// The for...of loop acts like the for in loop, but is specific for arrays. Instead of assigning the Object property to the supplied variable, it assigns the array value

// for ( var value of someArray ) {     
//     //do something   
// }
// Log the values of wordArr using a for... of loop

const wordArr = ['i', 'have', 'some', 'stings', 'inside', 'me'];
for (let value of wordArr) {
  console.log(value);
}



////////////////////////////
//     Challenge 10
////////////////////////////

// There are 4 array methods you should be aware of: pop, push, shift, unshift these methods add or remove items in certain ways
// array.pop() removes the last item from an array and returns this item
// array.push() accepts one or more arguments and adds them to the end of the array
// array.shift() removes the first item from an array and returns this item, shifting all other items down one
// array.push() accepts one or more arguments and adds them to the beginning of the array
// Use these methods in Challenge 10

const changeMe = ['shiftMe', 'leaveMe', 'popMe'];
// call the array methods, then uncomment the last line to check your answer
// call pop and log the result
changeMe.pop();
console.log();

// call push with the string "pushMe"
changeMe.push('pushMe');

// call shift and log the result
changeMe.shift();
console.log();

// call unshift with the string "unshiftMe"
changeMe.unshift('unshiftMe');




////////////////////////////
//     Challenge 11
////////////////////////////

// An important concept to grasp in javascript is that primitive datatypes (numbers, booleans, and strings) are passed by value, while objects (such as objects and arrays) are passed by reference. This means when you manipulate an object, any changes to that object are reflected in all other references to that object. Sometimes we want to copy an array, so that we can augment its values without worrying about changing the object itself, That's where the array .slice() method comes in. .slice() makes a copy of an array, with two optional parameters: a beginning index (inclusive) and an end index (exclusive). If no arguments are passed in, the slice method will just return an exact copy of the array. A sliced array copy will be a new object, and when compared with the equality operator == will not equal its original object.

// Uncomment the lines in the Challenge 11 and try and predict what will be return in the three equality expressions. Then in part two, slice the array and save each half in a variable

const a = [1, 2, 3];
const b = a;
console.log('array a is equal to array b?', a === b); // what will this return? true
const c = [1, 2, 3];
console.log('array a is equal to array c?', a === c); // what will this return? false
const d = a.slice();
console.log('array a is equal to array d?', a === d); // what will this return? false



const sliceMe = ['first', 'half', 'second', 'half'];
const firstHalf = sliceMe.slice(0, 1);
const secondHalf = sliceMe.slice(2, 3);



////////////////////////////
//     Challenge 12
////////////////////////////

// Another useful array method is .splice(). Splice is used to add or remove elements from an array. It however mutates the original array, unlike .slice(). This means items spliced out of or into an array will be reflected in all other references to this array. The splice method takes a first required parameter representing the start index, followed by an optional count parameter, reflecting the number of items to remove starting from the start index. Lastly, all other parameters passed to splice will be put into the array starting at the start index. The return value of the splice method will be an array of the removed elements.

// Uncomment the first lines of code and try and predict how the array will change
// Then, use the .splice() method to fix the two arrays


const arrA = [0, 1, 'remove me!', 2, 3];
arrA.splice(2, 1);
console.log(arrA); // [0, 1, 2, 3]
arrA.splice(1, 1, 'one');
console.log(arrA); // [0, 'one', 2, 3]



// fix the arrays
const numCount = [0, 1, 'two', 'three', 4];
const wordCount = ['zero', 'one', 2, 3, 'four'];
numCount.splice(2, 2, 2, 3);
wordCount.splice(2, 2, 'two', 'three');