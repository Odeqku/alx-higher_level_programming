#!/usr/bin/node

const myVar1 = process.argv.length - 2;
if (myVar1 === 0) {
  console.log('No argument');
} else if (myVar1 === 1) {
  console.log('Argument found');
} else {
  console.log('Argments found');
}
