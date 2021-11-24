var arr1 = [1, 2, 3]
var arr2 = [4, 5, 6]
var arr3 = [7, 8, 9]

// var sum1 = 0;
// for(var i = 0; i < arr1.length; i++){
//     sum1 += arr1[i]
// }
// console.log(sum1)


function sumOfArray(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    console.log(sum)
}

sumOfArray(arr1)
sumOfArray(arr2)
sumOfArray(arr3)
sumOfArray(arr3)