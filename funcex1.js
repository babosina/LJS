/**
 * Created by Babos on 29.04.2017.
 */

//rewrite usin || or ?
/*
function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm("U sure?");
    }
}
*/
/*
function checkAge2(age) {
    return age > 18 ? true : confirm("U sure?");
}

alert(checkAge2(35));
*/

function checkAge2(age) {
    return (age > 18 || confirm("U sure?"));
}

alert(checkAge2(12));