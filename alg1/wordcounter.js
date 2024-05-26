// * INPUT STRINGS
let strLoremIpsum1 = "Lorem ipsum dolor sit amet,"; // 5 words
let strLoremIpsum2 = // 19 words
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
// let strRandomStuff = "... what's uuuup my dude-bro! - ...wanna chill? $%@"; // 6 words
// let strRussian = "Бери ношу по себе - чтоб не падать при ходьбе";
// ? EDGE CASES
// ? empty str, single char or letter, numbers, special chars

const regex = /^[a-zA-Z]$/;
// const regexRu = /^[a-zA-Zа-яА-ЯёЁ]$/;
// console.log(regex.test('*'));

function countWords(str) {
  let isWord = false;
  let wordCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (regex.test(str[i])) {
      // letter
      isWord = true;
    }
    if (!regex.test(str[i]) && isWord && str[i] !== "-" && str[i] !== "'") {
      // space or sep. char
      wordCount++;
      isWord = false;
    }
    if (i === str.length - 1 && isWord) {
      // last char
      wordCount++;
    }
  }
  return wordCount;
}

let inputStr = "hi there ya''''''ll, for----all";
// let inputStr = "hey ...yo";
// let inputStr = "a,b,c,d";
console.log(countWords(inputStr));
