// var num1 = 2;
// var num2 = 3;

// var sum = function(){
//     return num1 + num2
// }

// console.dir(sum)

function bankAccount(initialBalance){
    var balance = initialBalance;
    return function(){
        return balance;
    }
}

var account = bankAccount(10000);
console.log(account())



