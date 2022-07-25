//Boş bir dizi oluşturmak için iki sözdizimi vardır:
let arr = new Array();
let arr1 = [];

let example = [ 'Apple', { name: 'John' }, true, function() { console.log('hello'); } ];
console.log(example[1].name); // John
console.log(example[3]()) // hello

let fruits = ["Apple", "Orange", "Pear"];
console.log( fruits[fruits.length-1] ); // Plum
console.log( fruits.at(-1) ); // Plum
console.log( fruits.pop() ); // remove "Pear" and console.log it
console.log( fruits ); // Apple, Orange

fruits.push("Pear");
console.log( fruits ); // Apple, Orange, Pear

let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
const firstElement = seas.shift();
console.log(firstElement); //Black Sea

let index = seas.indexOf('North Sea');
console.log(index); // 2

console.log(Array.isArray(seas)); // true
