var arr = [4, 5, 6, 7, 8, 9, 12, 49]

// for(var i = 0; i < arr.length; i++){
//     //console.log(arr[i])
//     arr[i] = arr[i] + 2
//     console.log(arr[i])
// }

// var sum = 0

// for(var i = 0; i< arr.length; i++){
//     sum += arr[i]
// }
// console.log(sum)

var evenSum = 0;
var oddSum = 0

for(var i = 0; i < arr.length; i++){
    
    if(arr[i] % 2 === 0){
        evenSum += arr[i]
    }else {
        oddSum += arr[i]
    }
}
console.log('Even Sum is: ' + evenSum)
console.log('Odd Sum is: ' + oddSum)