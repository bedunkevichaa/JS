'use strict';

const arr = [1, 12, 3, 89, 8];
arr.sort();
console.log(arr);

// // arr[99] = 0;
// // console.log(arr.length);

// arr.forEach(function (item, i, arr) {
//     console.log(`${i}: ${item} inside array ${arr}`);
// });

//arr.pop();


// arr.push(10);
// console.log(arr);

// for ( let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

const str = prompt('', '');
const products = str.split(', ');
products.sort();
console.log(products.join('; '));