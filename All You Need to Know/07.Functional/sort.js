var arr = [2, 3, 1, 4, 7, -5, 6, 8, 5, -4]

// arr.sort()
// console.log(arr)


// Assending
arr.sort(function(a, b){
    if(a > b){
        return 1
    }else if (a < b){
        return -1
    }else {
        return 0
    }
})

// Dessending
arr.sort(function(a, b){
    if(a > b){
        return -1
    }else if (a < b){
        return 1
    }else {
        return 0
    }
})

console.log(arr)