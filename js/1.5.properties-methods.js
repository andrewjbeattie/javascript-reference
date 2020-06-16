/* Difference between properties and methods

Properties: information that an object has.
Methods: what an object can do.

Example:

You have an instance (object) from a class named Vehicle.

    -The vehicle has: Number Plate, Brand, Model, Color. Those are properties.
    -The vehicle can: Turn On, Accelerate, Brake, Horn. Those are methods.

As you can see, Properties represent data about an object
And Methods represent actions associated with an object */

const s = 'Hello World';

/* Syntax difference: 
- Properties Don't have parenthesis - console.log(s.length);. 
- Methods have If it has parenthesis - console.log(s.toUpperCase()); */

// Here we are getting the property "length" (chars) from the variable "s" set above

console.log(s.length);

// Here we change the variable "s" through the method (toUpperCase) to upper case

console.log(s.toUpperCase());

// Here we change the variable "s" through the method to (toLowerCase to lower case

console.log(s.toLowerCase());

// Here we pull a substring of 5 characters out of the variable "s" which is a string

console.log(s.substring(0,5));

/* Here we pull a substring of 5 characters out of the variable "s" which is a string
and add another method chained to it to return it as Upper case */

console.log(s.substring(0,5).toUpperCase());