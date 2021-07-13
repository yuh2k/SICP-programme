function fibs(n){
    return n === 0
           ? null
           : n === 1
           ? list(1)
           : fibs_helper(n, list(1,1));
}
//1, 1, 2, 3, 5, 8
function fibs_helper(n, list){
    return n === 2
           ? list
           : fibs_helper(n - 1, pair(head(list) + head(tail(list)), list));
}

//example
display_list(fibs(7));
