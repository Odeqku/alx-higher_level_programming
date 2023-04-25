#!/usr/bin/node

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
module.exports = {
  biggest: biggest
};
