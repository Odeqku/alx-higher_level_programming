#!/usr/bin/node

const myVar = Number(process.argv[2]);
let myVar1 = 'X';

if (isNaN(myVar)) {
  console.log('Missing size');
} else {
  for (let i = 0; i < myVar - 1; i++) {
    myVar1 += 'X';
  } for (let i = 0; i < myVar; i++) {
    console.log(myVar1);
  }
}
