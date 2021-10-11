var names = ['amir', 'amir', 'mostafa', 'mostafa', 'abir', 'mos']
var pureNames = []
for(var i = 0; i < names.length; i++){
    var name = names[i]
    if(pureNames.indexOf(name) == -1){
        pureNames.push(name)
    }
}
console.log(pureNames)