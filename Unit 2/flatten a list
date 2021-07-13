function flatten_list(list){
    return is_null(list)
            ? list
            : append(head(list), flatten_list(tail(list)));
}

display_list(flatten_list(list(list(1, 2, 3), list(4, 5, 6), list(7, 8 ,9))));
