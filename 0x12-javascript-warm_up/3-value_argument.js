#!/usr/bin/node

const myVar2 = process.argv;
if (!myVar2[2]) {
  console.log('No argument');
} else {
  console.log(myVar2[2]);
}
