/**
 * Created by Babos on 30.04.2017.
 */

// factorial

function factorial(n) {
    if (n === 1) {
        return 1;
    } else if (n === 2) {
        return 2;
    } else {
        return n * factorial(n - 1);
    }
}

alert(factorial(5));


/*
function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}
 */

