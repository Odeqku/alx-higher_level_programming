#!/usr/bin/node

const myVar1 = process.argv.length - 2;
const myVar2 = process.argv;
if (myVar1 === 0) {
  console.log('No argument');
} else {
  console.log(myVar2[2]);
}
