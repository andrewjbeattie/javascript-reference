// Functions are a way of packaging functionality that you wish to reuse. It's
// possible to define a body of code as a function that executes when you call
// the function name in your code. This is a good alternative to repeatedly
// writing the same code. You have already seen some uses of functions
// previously. For example:

const myMessage = document.querySelector('h1');
alert('hello')


/* These functions, document.querySelector and alert, are built into the
browser.

If you see something which looks like a variable name, but it's followed by
parentheses— () —it is likely a function. Functions often take arguments: bits
of data they need to do their job. Arguments go inside the parentheses,
separated by commas if there is more than one argument.

argument: ('h1', 'h2')

For example, the alert() function makes a pop-up box appear inside the browser
window, but we need to give it a string as an argument to tell the function what
message to display.

You can also define your own functions. In the next example, we create a simple
function which takes two numbers as arguments and multiplies them: 
*/

const a = 30;
      b = 20;

  if( a > b) {
    alert('a is greater than b');
 }


/*
A function is a reusable piece of code that performs some logic and gives you a
 result The return keyword allows the function to give the result of its
 computation. return keyword can only be used inside a function. A parameter is
 a variable that a function receives. Most functions will use that variable they
 receive and will compute the result based on it. To call a function, you have
 to start with its name then opening parentheses (, then the value you want to
 give to the parameter and then a closing parentheses )

 */


function double(number) {
  return (number * 2);
}
 console.log(double(5));
 console.log(double(10));
 console.log(double(15));

