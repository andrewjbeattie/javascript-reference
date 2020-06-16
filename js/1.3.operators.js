/* Operators

An operator is a mathematical symbol which produces a result based on two values (or variables).

Assignment: This assigns a value to a variable.
Symbol: = 
Example: let myVariable = 'Bob';

Addition: Add two numbers together or combine two strings. 	
Symbol: + 	
Example: 6 + 9; 'Hello ' + 'world!';

Subtraction, Multiplication, Division: These do what you'd expect them to do in basic math.
Symbols: -, *, / 
Example: 9 - 3; 8 * 2; 9 / 3;

Equality: This performs a test to see if two values are equal. It returns a true/false (Boolean) result. 
Symbol: === 
Example: let myVariable = 3; myVariable === 4;

Not: This returns the logically opposite value of what it precedes. It turns a true into a false, etc.. 
Symbol: !
Example:    let myVariable = 3;
            !(myVariable === 3);

            For "Not", the basic expression is true, but the comparison returns false because we negate it.

Does-not-equal: When "not" (!) is used alongside the Equality operator (==), the negation operator tests whether two values are not equal. 
Symbol: !== 
Example:    let myVariable = 3;
            myVariable !== 3; 

"Does-not-equal" gives basically the same result with different syntax. 
Here we are testing "is myVariable NOT equal to 3". 
This returns false because myVariable IS equal to 3:

*/

// Assignment

const firstnumber = 8;
      secondnumber = 6;

// Addition

console.log(firstnumber + secondnumber);

// Subtraction

console.log(firstnumber - secondnumber);

// Multiplication

console.log(firstnumber * secondnumber);

// Division

console.log(firstnumber / secondnumber);

// Equality - should return true or false

console.log(firstnumber === secondnumber);

// Not - is a number other than 0, the result is false.

console.log(!firstnumber);

// Does not equal

console.log(firstnumber !==3);

