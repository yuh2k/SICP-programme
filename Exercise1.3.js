//Exercise 1.3

function sum_of_greater_2(a, b, c){
    return a > b
    ? (b > c
        ? a + b
        : a + c
      )
    :
      (a > c
        ? a + b
        : b + c
      )
    ;
}

sum_of_greater_2(1,2,3);
