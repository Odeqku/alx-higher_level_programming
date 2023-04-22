#!/usr/bin/node

function factorial (a) {
  const myVar = Number(a);
  if (isNaN(myVar) || myVar === 0) {
    return 1;
  } else {
    return myVar * factorial(myVar - 1);
  }
}
console.log(factorial(process.argv[2]));
