//* LEVEL 2 ASSIGNMENT: Pair Distance
console.log("LEVEL 2 ASSIGNMENT: Pair Distance");

// let arr = [0, 1, 2, 5, 6, 7, 8, 9, 2, 3], d = 6;
let arr = [5,2,3,4,5], d = 4;

// let arr = [4, 7, 3, 9, 2, 5, 7, 1, 6, 8], d = 5;
// let arr = [10, 3, 5, 8, 3, 1, 4, 7, 2, 6], d = 3;
// let arr = [6, 2, 8, 4, 9, 2, 5, 7, 1, 3], d = 10;
// let arr = [1, 5, 9, 6, 4, 8, 2, 7, 5, 3], d = 10;
// let arr = [2, 7, 6, 3, 8, 1, 4, 9, 2, 5], d = 10;

function isPairDistance(arr, d) {
  let pair;
  let distCnt;
  for (let i = 0; i < arr.length - 1; i++) {
    pair = arr[i];
    distCnt = 0;
    for (let j = i + 1; j < arr.length; j++) {
      distCnt++;
      if (arr[j] === pair && distCnt <= d) {
        console.log(`pair: ${pair}`);
        console.log(`dist: ${distCnt}`);
        return true;
      }
    }
  }
  return false;
}

console.log(isPairDistance(arr, d));
