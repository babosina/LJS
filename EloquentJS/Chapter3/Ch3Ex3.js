// Function counting uppercase 'B' char in the string

/*
function countBs(st) {
    let count = 0;
    for (let i = 0; i <= st.length; i++) {
        if (st[i] === 'B') {
            count ++;
        }
    }

    return count;
}

console.log(countBs('BaseBBBBall'));
*/

// Adding the character to be counted as a second argument
function countChars(st, char) {
    let count = 0;
    let countChar = 0;
    for (let i = 0; i <= st.length; i++) {
        if (st[i] === 'B') {
            count ++;
        }
        if (st[i] === char) {
            countChar ++;
        }
    }

    return  ('' + count + ' ' + countChar + '');
}

console.log(countChars('BaBos', 's'));
