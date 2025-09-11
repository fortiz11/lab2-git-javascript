function add (a,b){
    return a+b;
}

function subtract (a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide (a,b){
if (b===0){
    throw new Error ("cannot divide by zero")
}
return a/b;
}

console.log('Testing math functions:');
console.log('add(5,3)=' , add(5,3));
console.log('subtract(10,4=', subtract (10,4));
console.log('multiply(3,7)=', multiply (3,7));
console.log('divide(20,4)=', divide(20,4));


