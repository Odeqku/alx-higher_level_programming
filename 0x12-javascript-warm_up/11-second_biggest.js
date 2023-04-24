#!/usr/bin/node

const myArr = process.argv;

const myBiggest = biggest(myArr);

const new_Arr = bigger(myArr, myBiggest);

console.log(biggest(new_Arr));

function biggest(arr) {
  const zero = 0;
  const myVar = arr;
  let biggest = Number(myVar[2]);
  let n = 0;


  if (typeof myVar[2] === 'undefined' && isNaN(Number(myVar[0]))) {
    return zero;
  }

  else if (isNaN(Number(myVar[0])) && myVar.length > 3) {
    n = myVar.length - 2;

    for (let i = 1; i <= n; i++) {
      if (biggest < Number(myVar[i + 1])) {
        biggest = Number(myVar[i + 1]);
      }
    }
    return biggest;
  } else if (myVar.length === 1) {
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

function bigger(myArr, biggest) {
  let new_arr = [];
  const biggest2 = Number(biggest);
  const n = myArr.length - 2;

  for (let i = 2; i <= n + 1; i++) {
    if (!(biggest2 === Number(myArr[i]))) {
      new_arr.push(Number(myArr[i]));
    }
  }
  return new_arr;
}
