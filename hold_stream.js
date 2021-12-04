function list_to_stream(xs){
    return is_null(xs)
           ? null 
           : pair(head(xs), () => list_to_stream(tail(xs)));
}

function hold_stream(xs){
    return is_null(xs)
           ? null
           : is_null(tail(xs))
           ? pair(head(xs), () => hold_stream(xs))
           : pair(head(xs), () => hold_stream(tail(xs)));
           
    
}

display(eval_stream(hold_stream(enum_list(1,5)),10));