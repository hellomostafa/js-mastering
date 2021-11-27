var arr = [5, 4, 3, 6, 3, 2, 7, 11, 12]

var filteredArr = arr.filter(function(value){
    return value % 2 === 1
})

console.log(filteredArr)




function myFilter(arr){
    var newArr = []
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(myFilter(arr))

// using callBack

function myFilterTwo(arr, cb){
    var newArr = []
    for(var i = 0; i < arr.length; i++){
        if(cb(arr[i], i, arr)){
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(myFilterTwo(arr, function(value){
    return value % 2 === 0
}))

console.log(myFilterTwo(arr, function(value){
    return value % 2 === 1
}))