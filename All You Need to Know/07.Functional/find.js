var arr = [7, 3,2, 5, 67, 4, 56]

var result = arr.find(function(value){
    return value === 5
})

console.log(result)


var result2 = arr.findIndex(function(value){
    return value === 2
})

console.log(result2)

//Using CallBack
function myFind(arr, cb){
    for(var i = 0; i < arr.length; i++){
        if(cb(arr[i])){
            return arr[i] // value
            //return i // index
        }
    }
}

var result3 = myFind(arr, function(value){
    return value === 4
})

console.log(result3)