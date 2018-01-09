/*
Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.

Example 1:
Input: ["Hello", "Alaska", "Dad", "Peace"]
Output: ["Alaska", "Dad"]
Note:
You may use one character in the keyboard more than once.
You may assume the input string will only contain letters of alphabet.
*/
const rows = [
  {'Q': 1,'W': 1,'E': 1,'R': 1,'T': 1,'Y': 1,'U': 1,'I': 1,'O': 1,'P': 1,'q': 1,'w': 1,'e': 1,'r': 1,'t': 1,'y': 1,'u': 1,'i': 1,'o': 1,'p': 1},
  {'A': 1,'S': 1,'D': 1,'F': 1,'G': 1,'H': 1,'J': 1,'K': 1,'L': 1,'a': 1,'s': 1,'d': 1,'f': 1,'g': 1,'h': 1,'j': 1,'k': 1,'l': 1},
  {'Z': 1,'X': 1,'C': 1,'V': 1,'B': 1,'N': 1,'M': 1,'z': 1,'x': 1,'c': 1,'v': 1,'b': 1,'n': 1,'m': 1}
];

const testInput = ["Hello", "Alaska", "Dad", "Peace"];

var checkRow = (word, index) => {
  let row = rows[index];
  for (let i = 0; i < word.length; i++) {
    if (!row[word[i]]) {
      return false;
    }
  }
  return true;
}

var findWords = (words) => {
  let result = [];
  for (let i = 0; i < words.length; i++) {
    let word  = words[i];
    if (checkRow(word, 0) || checkRow(word, 1) || checkRow(word, 2)) {
      result.push(word);
    }
  }
  return result; 
}

console.log(findWords(testInput));