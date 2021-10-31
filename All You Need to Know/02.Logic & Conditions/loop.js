// Do while Loop

var isRunning = false;

while(isRunning){
    console.log('I am Running')
}

do{
    console.log('I am Running')
} while(isRunning)



// Nested Loop
var n = 5;
for(var i = 1; i <= n; i++){
    var result = '';
    for(var j = 1; j <= i; j++){
        result += j + ' ';
        
    }
    //console.log(result)

}


var m = 5;
for(var x = 1; x <= m; x++){
    var result2 = ''
    for(var y = 1; y <= m; y++){
        result2 += y + ' '
    }
    console.log(result2)
}