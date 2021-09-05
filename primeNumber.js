// function primeNumber(n) {
//     for(let i = 2; i < n; i++){
//         if(n % i == 0){
//             return 'Not a Prime Number'
//         }
//     }

//     return 'Prime Number'
// }
// var prime = primeNumber(4);
// console.log(prime)


let primeNumber = n => {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return 'Not a prime number';
        }
    }
    return 'prime number'
}
const result = primeNumber(2)
console.log(result)