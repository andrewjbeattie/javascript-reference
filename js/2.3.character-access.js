let language = "Javascript"

language[0]; //first character
language[1]; //second character
language[2]; //third character


console.log(language[1]);


// Wrong :

function getLastCharacter(language){
    return language[language.length - 1];
  }

console.log(getLastCharacter("Javascript"));


function skipFirstCharacter(name){
  return name.substring(1);
}

//sample usage
console.log(skipFirstCharacter("Iamsterdam"));
