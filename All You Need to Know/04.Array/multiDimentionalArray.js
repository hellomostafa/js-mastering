// Multi Dimensional Array

var arr = [
    [2, 3, 4, 5, 6],
    [43, 21, 53, 64],
    [76, 56, 35, 23]
]

// console.log(arr[0][1])
// console.log(arr[1][1])
// console.log(arr[2][1])

for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr[i].length; j++ ){
        console.log('Element ' + i + ': ' + arr[i][j])
    }
}