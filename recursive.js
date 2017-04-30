/**
 * Created by Babos on 30.04.2017.
 */

function pow(x,n) {
    if (n != 1) {
        return x * pow(x, n-1);
    } else {
        return x;
    }
}

alert(pow(1,10));