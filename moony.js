function row(n, shape){
    return stack_frac(n/5, blank,
        stack_frac((1 / (5-n)), shape, square));
}

function besiden(n,r){
    return quarter_turn_right(stackn(n, quarter_turn_left(r)));
}

// function combine(n, shape){
//     return show(beside_frac(1/5, row(0,shape),                           
//                 beside_frac(1/4, row(1,shape),
//                 beside_frac(1/3, row(2,shape),
//                 beside_frac(1/2, row(3,shape),row(4,shape))))));
// }

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