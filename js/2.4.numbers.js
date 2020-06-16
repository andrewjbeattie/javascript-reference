
function convertNumberToString(number){
    return number.toString();
}

//sample usage
console.log(convertNumberToString(42));
console.log(convertNumberToString(97));
console.log(convertNumberToString(11));


function convertStringToNumber(string){
    return Number.parseInt(string);
}

//sample usage
console.log(convertStringToNumber("42"));
console.log(convertStringToNumber("97"));
console.log(convertStringToNumber("11"));


function divisionRemainder(a, b){
    return a % b;
}

//sample usage
console.log(divisionRemainder(7, 2));
console.log(divisionRemainder(10, 2));


function isEven(x){
    return x % 2 === 0;
}

//sample usage
console.log(isEven(4));
console.log(isEven(5));
console.log(isEven(6));


function isOdd(x){
    return x % 2 != 0;
}

//sample usage
console.log(isOdd(4));
console.log(isOdd(5));
console.log(isOdd(6));
