/**
 * Created by Babos on 30.04.2017.
 */

//sum-to from 1 to n loop
/*
function sumTo(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

alert(sumTo(5));
*/

//sum-to from 1 to n recursion
/*
function sumTo(n) {
    //var sum = 0;
    if (n > 1) {
        return n + sumTo(n -1);
    } else {
        return n;
    }
}

alert(sumTo(5));
*/

//sum-to from 1 to n arithmetic progression

function sumTo(n) {
    var d = 1;
    var sum = ((2*1 + d*(n - 1))/2) * n;
    return sum;
}

alert(sumTo(5));