// String

var a = 'abc'
var b = 'bcd'

//console.log(a === b)

var x = 'I am'
var y = "Mostafa"
var z = x.concat(' ', y )

var j = z.substr(5)

//console.log(j)


// every word to array
//console.log(z.split(''))

//console.log(z.length)

var length = 0;

while(true){
    if(z.charAt(length) == ''){
        break;
    }else {
        length++
    }
}

console.log(length)