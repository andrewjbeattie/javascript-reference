/*
A parameter is a variable that a function receives.

Most functions will use that variable they receive and will compute the result
based on it.

That's exactly what we're doing here:

function double(number) {return number * 2
}

The function double receives a number parameter. The result of that function is
the number multiplied by 2. 


    A parameter is a variable that a function receives.
    Most functions will use that variable they receive and will compute the result based on it.
    To call a function, you have to start with its name then opening parentheses (, then the value you want to give to the parameter and then a closing parentheses )


 */

function double(number) {
    return (number * 2);
}
   console.log(double(5));
   console.log(double(10));
   console.log(double(15));

