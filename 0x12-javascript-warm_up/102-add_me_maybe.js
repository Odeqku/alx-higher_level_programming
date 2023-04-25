#!/usr/bin/node

const mayBe = (number, theFunction) => {
  const myNum = number + 1;
  const addMe = theFunction;
  addMe(myNum);
};
module.exports = {
  addMeMaybe: mayBe
};
