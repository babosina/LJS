/**
 * Created by Babos on 30.04.2017.
 */

// Fibonacci numbers

function fib(n) {
    if (n == 1 || n == 2) {
        return 1;
    } else {
        return fib(n-1) + fib(n-2);
    }
}

alert(fib(77));

/*
function fib(n) {
var a = 1;
bar b = 1;
for (var i = 3; i <= n; i++) {
var c = a + b;
a = b;
b = c;
}
return b;
}

alert(fib(7));
 */