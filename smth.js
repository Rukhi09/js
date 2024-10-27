let A = 10; 
let B = 10; 
if (A !== B) {
    let max = Math.max(A, B);
    A = max;
    B = max;
} else {
    A = 0;
    B = 0;
}
console.log("Новое значение A:", A);
console.log("Новое значение B:", B);
