//* LEVEL 2 ASSIGNMENT: Get Longest Prefix
console.log("LEVEL 2 ASSIGNMENT: Get Longest Prefix");

const TEST_DATA = {
  arr0: ["hip", "hippie", "hippo"],
  arrA: ["inside", "in", "inso", "insoor", "instiate"],
  arrB: ["ghost", "ghone", "ghoorow"],
  arrC: ["dismantle", "disembark", "mantle", "dislodge"],
  arrD: ["hello", "world", "I", "am", "here"],
  arrE: ["hi", "beehive", "ehi"],
  // ? Edge Cases: empty arr, empty str
  arrEmpty: [],
  arrEmptyStr: ["yoooo"],
};

function longestPrefix(arr) {
  if (arr.length === 0) {
    return "--";
  }
  let longestPrefixStr = "";
  let isPrefix = true;
  let ltrCnt = 0;
  let checkLtr;
  while (ltrCnt < arr[0].length && isPrefix) {
    checkLtr = arr[0][ltrCnt];
    // console.log(checkLtr, ltrCnt);
    for (let i = 0; i < arr.length && isPrefix; i++) {
      if (ltrCnt === arr[i].length || arr[i][ltrCnt] !== checkLtr) {
        isPrefix = false;
      }
    }
    if (isPrefix) {
      longestPrefixStr += checkLtr;
      ltrCnt++;
    }
  }
  if (longestPrefixStr === "") {
    return "--";
  } else {
    return longestPrefixStr;
  }
}

//* run tests
// console.log(longestPrefix(TEST_DATA.arrA));
for (p in TEST_DATA) {
  console.log(longestPrefix(TEST_DATA[p]));
}
