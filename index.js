console.log('practicing');

//The fibonacci series
function fibonacci(n) {
    const fib = [0,1];
    for(i=2; i<n ; i++){
        fib.push(fib[i-1]+fib[i-2]);
    }
    return fib;
}
//console.log(fibonacci(5));

// the factorial of a number
function factorial(n){
    let mul = 1;
    for (let i = 2; i <= n; i++) {
        mul = mul * i;
    }
    return mul;
}
// console.log(factorial(5));

// the Prime number recognition [solution 1]
function isPrime(n) {
    if(n<2){
        return false;
    }
    for (let i = 2; i < n; i++) {
        if(n%i === 0){
            return false;
        }
    }
    return true;
}
// the Prime number recognition [solution 2]
function isPrime(n) {
    if(n<2){
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if(n%i === 0){
            return false;
        }
    }
    return true;
}
// console.log(isPrime(1));
// console.log(isPrime(5));
// console.log(isPrime(4));

//The Power of two recognition [solution 1]
function isPowerOfTwo(n){
    if(n<1){
        return false;
    }
    while(n >1){
        if(n%2 !== 0){
            return false;
        }
        n= n/2;
    }
    return true;
}

// console.log(isPowerOfTwo(1));
// console.log(isPowerOfTwo(2));
// console.log(isPowerOfTwo(5));

//The Power of two recognition [solution 2: using bitwise operator]
function isPowerOfTwoBitwise(n) {
    if(n<1){
        return false;
    }
    return (n & (n-1)) === 0;
}

// console.log(isPowerOfTwoBitwise(1));
// console.log(isPowerOfTwoBitwise(2));
// console.log(isPowerOfTwoBitwise(5));

//Recursive fibonacci sequence
function recursiveFibonacci(n) {
    if(n<2){
        return n;
    }
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2);
}
//console.log(recursiveFibonacci(6));

//Recursive factorial of a number
function recursiveFactorial(n) {
    if(n<2){
        return 1;
    }
    return n * recursiveFactorial(n-1);
}
console.log(recursiveFactorial(5))