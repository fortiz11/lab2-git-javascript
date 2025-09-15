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

function power(base, exponent){
    return Math.pow(base, exponent);
}

function sqrt(n){
    if (n<0){
        throw new Error('Cannot calculate square root of a negative number');
    
    }
    return Math.sqrt(n);
}

function factorial (n){
    if (n<0){
        throw new Error('Factorial not defined for negative numbers');

    }
    if (n===0 || n===1) return 1;
    let result=1;
    for (let i=2; i<=n; i++){
        result *= i;
    }
    return result;
}



console.log('Testing math functions:');
console.log('add(5,3)=' , add(5,3));
console.log('subtract(10,4=', subtract (10,4));
console.log('multiply(3,7)=', multiply (3,7));
console.log('divide(20,4)=', divide(20,4));
console.log('power(2,8)=', power (2,8));
console.log('sqrt(16=', sqrt(16));
console.log('factorial(5)=', factorial(5));

