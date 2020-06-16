/* Conditionals are code structures used to test if an expression returns true or not. 
A very common form of conditionals is the if ... else statement. For example: */

const iceCream = 'chocolate';
if(iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!');    
} else {
  alert('Awwww, but chocolate is my favorite...');    
}

/* The expression inside the if( ... ) is the test. 
This uses the identity operator (as described above) to compare the variable iceCream 
with the string chocolate to see if the two are equal. If this comparison returns true,
the first block of code runs. If the comparison is not true, the second block of 
code—after the else statement—runs instead. */


const drink = 'kefir';
if(drink !== 'kefir') {

    alert('Better get some probiotics into you');
} else {
    alert('Your ok, you like kefir');
}


/* Study the syntax and learn to be able to write a conditional using multiple variables,
varying operators, properties and methods as well as concatenations of String

*/

const drink1 = 'kefir';
      drink2 = 'yoghurt'
      drink3 = 'coffee'
      drink4 = 'coca cola'

      if(drink1 === 'kefir' || drink2 === 'yogurt') {

      alert('That is great your drinking a probiotic');
      } else {
        alert('Your not drinking a probiotic, shame on you');
      }


      function canVote(age){
        if (age >= 18){
            return true;
        }
    }


    function canVote(age){
      if (age >= 18){
          return true;
      }else{
          return false;
      }
  }
  