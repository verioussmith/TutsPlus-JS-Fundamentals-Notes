
# TutsPlus JS Fundamentals Notes

These are notes for the tutsplus javascript fundamentals course. 

### Introduction

#### 1.3 Comments, Consoles & Alerts

* use for debugging
* Check variables or return the value of functions
* Availale in all modern browsers
* Favor Console log over alerts


#### 1.4 Section 1 Summary

* JS has been around for  more than 20 years
* Editors needed
* Debugging tools

### 2. Javascript Basics

#### 2.1 Variables

* A variable is a contaner for a valua
* JS is Weakly/dynamically typed
* Variable types can change
* Sometimes we dont know variable types

* Use camelCase for naming
* Always use var when defining a variable for the first time or else you pollute the global scope.

* Globally scoped variables are available for any other variables to access & update
* Use a linting tool to avoid globalluy scoped variables.

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












