
// Variables can be a: String, Numbers, Boolean, null, undefined

/*  Variables defined:

String: This is a sequence of text known as a string. To signify that the 
value is a string, enclose it in single quote marks. 	
const myVariable = 'Bob';

Number:	This is a number. Numbers don't have quotes around them. 
let myVariable = 10;

Boolean: This is a True/False value. The words true and false are special keywords 
that don't need quote marks. 
let myVariable = true;

Array: This is a structure that allows you to store multiple values in a single reference. 	
let myVariable = [1,'Bob','Steve',10];
Refer to each member of the array like this:
myVariable[0], myVariable[1], etc.

Object: This can be anything. Everything in JavaScript is an object, and can be stored 
in a variable. Keep this in mind as you learn. 	
let myVariable = document.querySelector('h1');

All of the above examples too of objects. 

You declare a variable with either:

- var (old way and less recommended as is legacy and mostly deprecated)
- let (can be reassigned)
- const (always constant - can't be initialised without a value)

*/

const name = 'Bob';
const age = 28;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof isCool);



function defineVariable(){
    //define a variable "count" with value 0
    let count = 0;
    //then increment it
    count += 1;
    //finally return it
    return count;
}
