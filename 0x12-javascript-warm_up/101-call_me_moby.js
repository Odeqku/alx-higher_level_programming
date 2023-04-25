#!/usr/bin/node

const myFunc = (x, theFunction) => {
  const myX = x;
  const func = theFunction;

  for (let i = 0; i < myX; i++) {
    func();
  }
};
module.exports = {
  callMeMoby: myFunc
};
