#!/usr/bin/node

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
module.exports = {
  bigger: bigger
};
