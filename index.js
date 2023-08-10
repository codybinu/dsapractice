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
console.log(factorial(5));