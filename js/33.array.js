let sum = 0
let arr = [10, 20, 30, 40, 50]
for (let a = 0; a <= 4; a++) {
  sum = sum + arr[a]
  console.log(sum * arr[a])
}

let str=[true ,"hello","world"]
for(let b=0;b<=2;b++){
    console.log(str[1]+" "+str[2]);
}

// let array = 0;
// function multiply(assign){
//   multiply.forEach(assign => {
//     assign*2
    
//   });
// }

let multiply=[10,20,30]

multiply.forEach(function(index) {
  console.log(index*2);
  
});

let ary = ["uzair","ahmed",{age:19},89,true,false,Object];
// ary.forEach (ary => {return (typeof value)});
// console.log(value)
ary.forEach(function(value){
  console.log (typeof value);
});

console.log(typeof ary[2]);

let arry = ["uzair","ahmed",{age:19},89,true,false,Object];
console.log(arry[4]);

let things = new Array(3);

things[0] = "0";
things[1] = "1";
things[2] = "2";

console.log(things[2]);

let dudes = new Array ("h","e","y");
let chicks = new Array ("h","e","l","l","o");

var cnct = dudes.toString(chicks);
console.log(cnct);

var cnct = dudes.join("");
console.log(cnct);
var cnct = chicks.join("");
console.log(cnct);

dudes.pop();
console.log(dudes);

