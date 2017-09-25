
# TutsPlus JS Fundamentals Notes

These are notes for the tutsplus javascript fundamentals course. 

### Introduction

#### 1.3 Comments, Consoles & Alerts

* use for debugging
* Check variables or return the value of functions
* Availale in all modern browsers
* Favor Console log over alerts


#### 1.4 Section 1 Summary

* JS has been around for more than 20 years
* Editors needed
* Debugging tools

### 2. Javascript Basics

#### 2.1 Variables

* A variable is a container for a value
* JS is Weakly/dynamically typed
* Variable types can change
* Sometimes we dont know variable types

* Use camelCase for naming
* Always use var when defining a variable for the first time or else you pollute the global scope.

* Globally scoped variables are available for any other variables to access & update
* Use a linting tool to avoid globally scoped variables.

#### 2.2 Data Types

* Loosely typed
* Few types

##### Primitives

* Number (Primary Data Type)
	- Any Positive or negative integer or decimal
	- Greater than 5e-324
	- Less than 1.7976931348623157e+308
	- Octal
	- Exponential
	- Hexadecimal
	- +Infinity
	- -Infinity
	- Infinity is a special number
	- NAN - Not a number (happens if you try to perform an invalid operation on a number. ex.. dividing a number by a string.)
	- Nothing is equal to NAN (not even NAN), Use isNAN to check
* String (Primary Data Type)
	- A sequence of characters within quotes
	- can be double or single quotes
	- quotes can be nested, but must match
* Boolean (Primary Data Type)
	- Only two values - True or False
	- Javascript has truthy or falsy values as well (very useful when it comes to conditionals)
		- Falsey values
			- false
			- 0
			- ''
			- null
			- undefined
			- NaN
		- All other values are truthy
* Undefined (Special Data Type)
	- Automatically assigned to a variable we do not assign a value to
	- Sometimes undefined and null are equal
	- Undefined and null are seperate data types
	- Not a variable but can be used as the value for a variable
* Null (Special Data Type)
	- A data type used in the place of any regular value (ie String or Number)
	- Once a variable has been set it cannot be unset or deleted but it can have it's value set to null
* Array (Composite Data Type)
	- Container for multiple values
	- Not associative but like objects with fixed numerical indices
	- indices are zero-based
* Object (Composite Data Type)
	- Containers for key value pairs of data
	- Pairs seperated by commas
	- Key and value seperated by a colon
	- Accessed with dot notation or bracket notation
	- Similar conceptually to an array except with indices based on words
	- In other languages they are reffered to as associative arrays.

#### 2.3 Basic Operators

* Plus Sign + Addition
* Minus Sign - Subtraction
* Star Character * Multiplication
* Forward Slash / Division
* Modulus % Remainder after division
* Increment ++
* Decrement --

* Postfix mode exampleVariable++/--
  - Postfix will return the value of the variable then increment the value after
* Prefix mode  ++/--exampleVariable
  - Prefix will increment the value then return the value
* Assignment - Simple assignment uses a single equals sign = 

* Comparison operators
  - Equality comparison
  	- Recommended to always use strict comparison
  - Greater-than comparison
  - Less-than comparison

#### 2.4 Operators Continued

  - Unary operators + - ! void typeof delete
    - Used with only a single operand
  - Logical operators && || 

#### 2.5 Operator Precedence

  - Operators are evaluated according to their precedence, which is somewhat complex
    - Full info on operator precedence:  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

#### 2.6 Objects

  - Consist of a list of comma seperated values within curly braces
  - The key / value pairs are known as properties
    - The identifiers are called "keys"
    - The values are known as "values"
  - Can consist of any other data types, Objects or functions
  - Object literal syntax is the recommended way to create objects
  - You can also create objects using the "new" keyword
  - Access properties with . or [] syntax
  - Add properties with . and = 
  - We can create primitives using "new" but don't

#### 2.7 Functions

  - General Workhorse of Javascript Applications.
  - A logical grouping of one or more expressions.
  - Invoked arbitratrily to execute the expressions.
  - Passing values into a function allows those values to be treated as variables in the function
  - we can define functions in many ways.  A function expression is stored in a variable
  - Named function expressions are generally preferred to anonymous function expressions because of a phenomena called "Hoisting"
  - Named functions expressions can cause problems in Internet Explorer 7 and below	
  - We can nest functions.  This is useful & powerful when exploited to create closures
  - We can also pass functions to other functions and have the receiving function invoke them
  - Functions passed to other functions and then invoked are known as callback functions
  - Hoisting
    - Variables are processed before any other code is executed so it is advised to always declare variables at the start of the function they are contained within even if we don't assign them a value.
    - A variable defined halfway down a function is still available at the top of the function because javascript "hoists" varaibles to the top of the scope.
    - Any variables that are not defined in our code will not be hoisted and will return a Reference Error in the console.
    - Functions created using the function declaration are evaluated before other code and are "Hoisted" to the top of their scope.
    - Function expressions are not Hoisted and this is why they are preferred
  - Functions can be defined so as to be invoked automatically.
    - Wrap them in an extra set of parenthesis 
    - Use a unary operator at the start of the function instead of wrapping the function in an extra set of parenthesis
  
##### Functions Summary
  
  - Use function declarations or function expressions
  - Name arguments in parentheses after the function identifier
  - Use an extra set of parentheses to invoke immediately
  - Function expressions are stored in a variable
  - Variables and functions are "hoisted" to the top of their scope. 

#### 2.8 Scope

  - 