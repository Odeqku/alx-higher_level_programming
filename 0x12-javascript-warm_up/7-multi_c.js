#!/usr/bin/node

const myVar = process.argv;

if (isNaN(myVar[2])) {
  console.log('Missing number of occurrences');
} else {
  for (let i = 0; i < myVar[2]; i++) {
    console.log('C is fun');
  }
}
