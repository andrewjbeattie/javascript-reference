/* JavaScript provides three logical operators:

    ! (Logical NOT)
    || (Logical OR)
    && (Logical AND) 


The logical AND (&&) operator (logical conjunction) for a set of operands is true if and 
only if all of its operands are true. It is typically used with Boolean (logical) values. 
When it is, it returns a Boolean value. However, the && operator actually returns the 
value of one of the specified operands, so if this operator is used with non-Boolean values,
it will return a non-Boolean value.

*/

// AND - The result of the && operator is true only if both values are true, otherwise, it is false.

const a = 3;
      b = 6;
      day1 = 'Monday';
      day2 = 'Tuesday';
      m = 5;
      p = 5;


console.log(a > 0 && b > 0);

// AND - should return false because "b" is not greater than 7 but "a" is greater than 3.

console.log(a > 2 && b > 7);

// AND - should return false

console.log(a == b && day1 == day2);

// AND - should return true - neither are equal

console.log(a !== b && day1 !== day2);

// AND - should return false because although x is equal to y,  a is not equal to b

console.log(m == p && a == b);


// OR - JavaScript uses the double pipe || to represent the logical OR operator. 
// You can apply the || operator to two values of any types:

// OR - should return true, because at least one value fulfils the logic

console.log(a > 2 || m > 6);

// OR - should return false because none of the values fulfil the logic

console.log(m > 6 || b < 3);

// OR - should return true as one of the variables fulfils the logic

console.log(a !== b || m !== p);
