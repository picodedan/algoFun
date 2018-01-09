/*
Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:
Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
Note: In the string, each word is separated by single space and there will not be any extra space in the string.
*/

let testInput = "Let's take LeetCode contest";

const stringReverse = (string ,index, array) => {
  let reversed = '';
  for (let i = string.length -1; i >= 0; i--) {
    reversed += string[i];
  }
  array[index] = reversed;
};
var reverseWords = (s) => {
  //to preseve original word order,  split the string by words(' ')
  let sArray = s.split(' ');
  console.log(sArray);
  //for each word in the now split array,  reverse the order of the characters
  sArray.forEach(stringReverse);
  return sArray.join(' ');
};

console.log(reverseWords(testInput));