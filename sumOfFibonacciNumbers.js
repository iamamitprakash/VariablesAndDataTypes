function fibonacciSum(n){
    if(n <= 0){
        return 0;
    }

    let fibSum = 0;
    let fibPrev = 0;
    let fibCurrent = 1;

    for(let i = 1; i <= n; i++){
        fibSum += fibCurrent;
        let temp = fibCurrent;
        fibCurrent = fibPrev + fibCurrent;
        fibPrev = temp;
    }
    return fibSum;
}

// console.log(fibonacciSum(4));

const n = 5;
const result = fibonacciSum(n);
console.log(`Sum of first ${n} fibonacci numbers: ${result}`);