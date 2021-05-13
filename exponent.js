function exponent(b, n){
    return n === 0
    ? 1
    : exponent_iter(b, n, b);
}

function exponent_iter(b, counter, product){
    return counter === 1
    ? product
    : exponent_iter(b, counter-1 ,product*b);
}

exponent(2,0);