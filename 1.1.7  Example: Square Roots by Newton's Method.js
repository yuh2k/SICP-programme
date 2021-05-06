// Find Sqrt by Newton's Method


function abs(x) {
    return x >= 0 ? x : - x;
}

function sqrt(n){
    
    return sqrt_iter(1, n);
}

function sqrt_iter(guess, n){
    return judge(guess, n);
}

function judge(guess, x){
    return abs(x/guess - guess) < 0.000000000000001
    ? (x/guess)
    : sqrt_iter(improve(guess, x), x);
}

function improve(guess, x){
    return (guess + x/guess)/2;
}


sqrt(4);