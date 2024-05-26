//* LEVEL 2 ASSIGNMENT: String Shuffle
console.log("LEVEL 2 ASSIGNMENT: String Shuffle");

const TEST_DATA = {
  // working anagrams
  arrA: ["act", "cat"],
  arrB: ["secure", "rescue"],
  arrC: ["night", "thing"],
  // different words
  arrD: ["rat", "cat"],
  arrE: ["ship", "pipe"],
  // ? Edge Cases: empty str, same str
  arrF: ["", ""],
  arrG: ["str", "str"],
};

function isAnagram(arr2str) {
  let strA = arr2str[0];
  let strB = arr2str[1];
  if (strA === strB) {
    return true;
  }
  let anagram = false; //result
  let findChar = false; //flag find
  //! using for...in to loop over array obj
  //! decalring w/o keyword makes global var
  for (cA in strA) {
    for (cB in strB) {
      //   console.log(strA[cA], strB[cB], findChar, anagram);
      if (strA[cA] === strB[cB]) {
        findChar = true;
        // console.log('flag')
        break;
      }
    }
    if (findChar === true) {
      anagram = true;
      findChar = false; //reset find
    } else {
      return false;
    }
  }
  return anagram;
}

for (p in TEST_DATA) {
  console.log(isAnagram(TEST_DATA[p]));
}

// let str = "abcdef";
// for(let i = 0; i < str.length; i++){
//     console.log(str[i]);
// }
// for(c in str){
//     console.log(c)
// }
