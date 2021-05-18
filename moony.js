
// Staircase
// The goal of these next exercises is to write a function moony that takes a parameter n and
// produces a rune with n circles on the steps of a staircase. The picture below is produced by
// show(moony(5)).


function row(n, shape){
    return stack_frac(n/5, blank,
        stack_frac((1 / (5-n)), shape, square));
}

function besiden(n,r){
    return quarter_turn_right(stackn(n, quarter_turn_left(r)));
}

//recursion
function combine(n,shape){
    return n === 0
    ? row(1/n, shape)
    : beside_frac(1/n, row(5-n, shape),
                combine(n-1, shape));
}

function moony(n){
    return show(combine(n, circle));
}

moony(5);
