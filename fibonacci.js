var fibo = [0,1]
for( i = 2; i <= 9 ; i++){
    fibo[i] = fibo[i-1] + fibo[i-2]
}
//console.log(fibo)

// fibonacci recursive
function fibonacci(n){
    if(n == 0){
        return 0
    }else if(n == 1){
        return 1
    }else{
        return fibonacci(n -1 ) + fibonacci(n-2)
    }
}
var result = fibonacci(8)
console.log(result)