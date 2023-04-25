#!/usr/bin/node

let myBiggest = 0;
let newArr = [];
const myArr = process.argv;

if (typeof myArr[2] === 'undefined' && isNaN(Number(myArr[0]))) {
  console.log(myBiggest);
} else if (myArr.length === 3) {
  console.log(myBiggest);
} else if (typeof myArr[2] !== 'undefined' && myArr.length > 3) {
  myBiggest = biggest(myArr);
  newArr = bigger(myArr, myBiggest);
}
if (newArr.length === 1) {
  console.log(newArr[0]);
} else if (typeof myArr[2] !== 'undefined' && myArr.length > 3) {
  console.log(biggest(newArr));
}

function biggest (arr) {
  const zero = 0;
  const myVar = arr;
  let biggest = Number(myVar[2]);
  let n = 0;

  if (isNaN(Number(myVar[0])) && myVar.length > 3) {
    n = myVar.length - 2;

    for (let i = 1; i <= n; i++) {
      if (biggest < Number(myVar[i + 1])) {
        biggest = Number(myVar[i + 1]);
      }
    }
    return biggest;
  } else if (myVar.length === 1 && typeof Number(myVar[0]) === 'number') {
    return zero;
  } else {
    let biggest1 = Number(myVar[0]);
    for (let i = 1; i <= myVar.length; i++) {
      if (biggest1 < Number(myVar[i])) {
        biggest1 = myVar[i];
      }
    }
    return biggest1;
  }
}

function bigger (myArr, biggest) {
  const newArr = [];
  const biggest2 = Number(biggest);
  const n = myArr.length - 2;

  for (let i = 2; i <= n + 1; i++) {
    if (!(biggest2 === Number(myArr[i]))) {
      newArr.push(Number(myArr[i]));
    }
  }
  return newArr;
}
