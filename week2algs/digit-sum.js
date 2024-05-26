//* LEVEL 2 ASSIGNMENT: Get Longest Prefix
console.log("LEVEL 2 ASSIGNMENT: Digits Sum");

function sumDigits(n) {
  let nStr = n.toString();
  let sum = 0;
  //! decalring w/o keyword makes global var
  for (c of nStr) {
    sum += Number(c);
  }
  return sum;
}

console.log(sumDigits(3598));