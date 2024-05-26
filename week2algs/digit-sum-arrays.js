//* LEVEL 2 ASSIGNMENT: Get Longest Prefix
console.log("LEVEL 2 ASSIGNMENT: Sum from Arrays");

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5];
let arr1 = [0, 1, 0, 5];
let arr2 = [9, 5];

function sumArrays(a, b) {
  let str = "";
  //! decalring w/o keyword makes global var
  for (i of a) {
    str += i.toString();
  }
  a = Number(str);
  str = "";
  for (i of b) {
    str += i.toString();
  }
  b = Number(str);

  let sumStr = (a + b).toString();
  let sumArr = [];
  for (c of sumStr) {
    sumArr.push(c);
  }

  return sumArr;
}

console.log(sumArrays(arr1, arr2));
