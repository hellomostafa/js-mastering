var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// insert 9 to index 3

// arr[3] = 9;
// arr.push(9)
// arr.unshift(9)

arr.splice(3, 0, 9, 10)

console.log(arr)