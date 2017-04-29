/**
 * Created by Babos on 29.04.2017.
 */

/*
function foo() {
    var mess = 'Hello im T';
    alert('Hello!!!');
    alert(mess);
}

foo();
alert(mess);
*/
/*
function count() {
    for (var i = 0; i < 3; i++) {
        var j = i * 2;
    }
    alert(i);
    alert(j);
}

count();
*/

/*
var user = 'To';

function show() {
    var mess = 'Hello ' + user;
    alert(mess);
}

show();
*/

/*
function show(from, text) {
    from = '** ' + from + ' **';
    alert(from + ': ' + text);
}

show('To', 'Is');
show('Li', 'Ch');
*/

function calc(a,b,c) {
    return b*b - 4*a*c;
}

var test = calc(-4,2,1);
alert(test);
