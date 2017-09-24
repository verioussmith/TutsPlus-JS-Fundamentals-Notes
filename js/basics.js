// Single line comment

/* Multi line
comment */

console.log('<3');

//alert('oh noes!');

var theMeaningOfLife; // This variable is undefined

var theMeaningOfLife = 42, // This is assigned the value of 42
	foo = 'bar', // Contains a string 'bar'
	baz, quux; // treated as if using multiple var statements

foo = baz; // Now overwritten with value of undefined

var number = 1; // This is a number data type
var string = 'hello'; // this is a string
var quotes = '"Hello", said the man.'; // Nested quote string
var escaped = '"Oh no you did\'nt" she said.'; // Escaped string
var joined = 'wait, ' + 'what?'; // Joined variable will be a single string.

var array = [5, 'something', true]; // Array length here is 3

var object = {  // An Object with 
	myNumber: 10,
	myString: 'woohoo!'
}

object.myNumber; // Dot Notation: This returns 10
object['myString']; // Bracket Notation: This returns 'woohoo!'


var addition = 1 + 1; //addition = 2
var subtraction = 1 - 1; //subtraction = 0
var multiplication = 5 * 2; //multiplication = 10
var division = 5 / 2.5; //division = 2;

var remainder = 5 % 2; //remiander = 1

var postfix = 5;
var prefix = 5;

var addtionAssignment = 1;
addtionAssignment += 1; // additionAssignment = 2

var subtractionAssignment = 1;
subtractionAssignment -= 1; // subtractionAssignment = 0;

var multiplicationAssignment = 2;
var divisionAssignment = 5;
var modulusAssignment = 5;
multiplicationAssignment *= 2; // multiplicationAssignment = 4
divisionAssignment /= 2.5; // divisionAssignment = 2
modulusAssignment %= 2; // modulusAssignment = 1

var precedence = 1 + 4 * 2; // precedence = 9
var precedence2 = (1 + 4) * 2; // precedence2 = 10
var precedence3 = 2 + 10 - 2; // precedence3 = 10


var object = { // This is an "Object Literal"
	property1: true,
	property2: 'hello'
};

var string = 'hello';
var stringObject = new String('An object string');


function getThingByColour(colour) {
	var things = {
		red: 'a red thing',
		green: 'a green thing',
		blue: 'a blue thing'
	}

	return things[colour] || 'Sorry, no thing of that colour exists';
}























