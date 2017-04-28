/**
 * Created by Babos on 28.04.2017.
 */
/*
var a = 2 + 2;

switch (a) {
    case 3:
        alert('Too litle!');
        // break;
    case 4:
        alert('Strike!');
        // break;
    case 5:
        alert('Too much!');
        // break;
    default:
        alert('I dunno');
}
*/
/*
var a = 1;
var b = 0;

switch (a) {
    case b + 1:
        alert(1);
        break;

    default:
        alert('Nonono');
}
*/
/*
var a = 2 + 2;

switch (a) {
    case 4:
        alert('Yes');
        break;
    case3:
    case5:
    alert('No');
    alert('Missed');
    break;

    default:
        alert('Strange');
}
*/

var arg = prompt('Enter arg ');
switch (arg) {
    case '0':
    case '1':
        alert('1 or 0');

    case '2':
        alert('2');
        break;

    case 3:
        alert('Never run');

    default:
        alert('Irreal' + arg);
}