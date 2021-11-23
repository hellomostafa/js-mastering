var person = {
    name: 'Amir',
    age: 23,
    profession: 'Developer'
}


var obj = {
    x: 40,
    y: 60,
    z: 75
}

// console.log('x' in obj)
// console.log('a' in obj)
// console.log('name' in person)
// console.log(person.name)


for(var i in obj){
    //console.log(i)
    //console.log(i + ': ' + obj[i])
}

// console.log(Object.values(obj))
// console.log(Object.keys(obj))
// console.log(Object.entries(obj))



var arr = {
  more: {
    0: {
      type: "ship",
      amount: 20
      },
    1: {
      type: "me",
      amount: 30
      },
    2: {
      type: 'you',
      amount: 50
    }
  },
  totalAmount: 300,
  totalBilling: 200
}

for(var i in arr.more){
    console.log(i)
    // console.log(i + ': ' + obj[i])
}