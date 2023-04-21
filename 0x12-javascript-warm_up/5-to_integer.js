#!/usr/bin/node

const myIntVar = Number(process.argv[2]);
const myIntVar1 = Math.floor(myIntVar);

if (!(isNaN(myIntVar1))) {
  console.log(`My number: ${myIntVar1}`);
} else {
  console.log('Not a number');
}
