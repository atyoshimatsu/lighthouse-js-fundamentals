function range(start, end, step) {
    if (start === undefined || end === undefined || step === undefined || start > end || step <= 0) {
        return [];
    }

    return new Array(end - start + 1).fill(0).map((n, index) => start + index).filter(n => (n - start) % step === 0);
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(-5, -5, 3));
console.log(range(-5, 2, 0));
console.log(range(-5, -8, 1));
console.log(range(-5, 4, undefined));
console.log(range(undefined, 4, 1));
console.log(range(-5, undefined, 1));