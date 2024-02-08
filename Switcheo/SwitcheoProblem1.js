// Declaration
let n = 5;

// For loop
var sum_to_n_a = forLoop(n);

function forLoop(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
};

// Recursion 1
var sum_to_n_b = recursion1(n);

function recursion1(n) {
    if (n === 1) {
        return 1;
    } else {
        return n + recursion1(n - 1);
    }
};

// Recursion 2
var sum_to_n_c = recursion2(n);

function recursion2(n) {
    return (n * (n + 1)) / 2;
};

// Print values
console.log("sum_to_n_a: " + sum_to_n_a + "\n" + "sum_to_n_b: " + sum_to_n_b + "\n" + "sum_to_n_c: " + sum_to_n_c);