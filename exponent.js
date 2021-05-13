function factorial(n){
    return n === 0 || n === 1
    ? 1
    : factorial_iter(n, n, n-1);
}

function factorial_iter(n, product, count){
    return count === 1
    ? product
    : factorial_iter(n, product*count, count-1);
}

factorial(1);