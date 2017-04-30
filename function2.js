/**
 * Created by Babos on 30.04.2017.
 */

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

function showOk() {
    alert('Comfirmed');
}

function showCancel() {
    alert('Dismiss');
}

ask("R u sure?", showOk, showCancel);
