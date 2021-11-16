//Data Search
var arr = [4, 42, 41, 64, 63, 75, 46, 73];

var find = 73;
var isFound = false

for(var i = 0; i < arr.length; i ++){
    if(arr[i] === find){
        console.log('Data Found in ' + i)
        isFound = true
        break;
    }
}

if(!isFound){
    console.log('Data not Found')
}