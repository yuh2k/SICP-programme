function is_Prime(n){
    
    return n === 0 || n === 1
    ? false
    : is_Prime_iteration(n, 2);
}


function is_Prime_iteration(n, counter){
    
    return n === counter
    ? true
    :n % counter === 0
        ? false
        : is_Prime_iteration(n, counter+1);
}

is_Prime(29);
