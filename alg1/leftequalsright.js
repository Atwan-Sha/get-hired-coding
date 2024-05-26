//* NUMBER SETS
let setA = [9, 4, 0, 8, 7, 1, 6, 5, 10, 2];
let setB = [7, 10, 9, 8, 2, 3, 0, 5, 1, 6];
let setC = [10, 4, 2, 0, 6, 9, 8, 5, 7, 3];

let setTst = [100, 0, 0, 0, 1, 0, 1, 100];

function findEqualIndex(arr) {
  let sum = 0;
  for (e of arr) {
    sum += e;
  }
  let half = sum / 2;
//   console.log(half);
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > half) {
      return i;
    }
  }
}

console.log(findEqualIndex(setTst));
