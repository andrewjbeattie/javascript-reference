// Arguments Assuming we've got the function triple and that we're calling that
// function twice:

function triple(number) {
    return number * 3
}

triple(5)
triple(10)

/* 
    - The number variable is called a parameter.
    - The 5 that is passed to triple in triple(5) is called an argument.
    - The 10 that is passed to triple in triple(10) is called an argument.

    - Parameters are variables listed as a part of the function definition.
    - Arguments are values passed to the function when it is invoked. 
 */

// Multiple arguments
//You can have more than 2 arguments, and the syntax is similar:

 function sum(x, y, z) {
  console.log(x + y + z);
  return x + y + z
}
sum(5,4,5);



function myFunction(parameter1) {
    console.log(parameter1 * 2);
    return parameter1 * 2
  }
  myFunction(10)