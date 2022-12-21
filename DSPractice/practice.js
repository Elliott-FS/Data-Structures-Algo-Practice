function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

console.log(addUpTo(6))

//alt solution function addUpTo(n) {
//return n *(n +1) / 2;
//}

//This shows the code has different runtimes per run
let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)


// another interesting function  

// function logAtLeast10(n) {
//     for (var i = 1; i <= Math.max(n, 10); i++) {
//         console.log(i);
//     }
// }