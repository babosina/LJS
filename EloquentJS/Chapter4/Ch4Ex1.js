// -- Array in range --
function range(start, end, step) {
    let ar = [];
    if (step === undefined) {
        for(let i = start; i <= end; i++) {
            ar.push(i);
        }
        return ar;
    } else {
        for(let i = start; i <= end; i += step) {
            ar.push(i);
        }
        return ar;
    }

};

console.log(range(1,11,3));

// -- Sum of an array
function sum(ar) {
    let sum = 0;
    for (let i = 0; i < ar.length; i++) {
        sum += ar[i];
    }
    return sum;
}
a = [1,2,3,4,5,6];
console.log(sum(a));

