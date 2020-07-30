console.log("hello world");
var list = [1,2,3,4,5];
console.log(list)

list.push(7);
console.log(list)

list.unshift(10);
console.log(list)

list.splice(2,0,"William")
console.log(list)

list.pop()
console.log(list)

list.splice(2,1)
console.log(list)

var array=[1,2,3,4,5]
array [3] = 100
console.log(array)

array.sort(function(a, b){return a-b})
console.log(array)


let json = [
    {"firstName":"john", "lastName": "Doe" },
    {"firstName":"alice", "lastName": "zhou"},
    {"firstName":"alxer", "lastName": "wang"}
];
console.log(json);

for(var i=0;i<json.length;++i)
{
    console.log(json[i].firstName+""+json[i].lastName)
}

// console.log(jason[0,1,2].firstName)



function multiplyNums(x, y, z){
    return 'new number is ' + x * y * z; 
}
console.log(multiplyNums(1,2,3))