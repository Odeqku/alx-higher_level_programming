#!/usr/bin/node

function add (a, b) {
  const myVar = process.argv.length - 2;
  const myVar1 = Number(a);
  const myVar2 = Number(b);

  if (isNaN(myVar1) || myVar < 2) {
    console.log('NaN');
  } else {
    console.log(myVar1 + myVar2);
  }
}
const num1 = process.argv[2];
const num2 = process.argv[3];
add(num1, num2);
