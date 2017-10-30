/**
The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

Note:
0 ≤ x, y < 2^31.

Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different.
 */
const a = 1;
const b = 4; 
const c = 2147483646;
const d = 152457;
var hammingDistance = function(x, y) {
  const baseLen = '00000000000000000000000000000000';
  let xString = x.toString(2);
  let yString = y.toString(2);
  let count = 0, check = 0;
  //JS to String method does not return 'full length of bit representation,  only the trailing sig figs.  
  //correct x and y strings to full length so valid comparison can be made. 
  if (xString.length !== 32) {
    xString = baseLen.slice(xString.length) + xString;
  }
  if (yString.length !== 32) {
    yString = baseLen.slice(yString.length) + yString;
  }
  // console.log(xString);
  // console.log(yString);
  while (check <= 32) {
    if (xString[check] !== yString[check]) {
      count++;
    }
    check++;
  }
  return count;
};

/** alt hamming distance solution using bitwize operators.. */

var altHammingDistance = function(x, y) {
  let dist=0;
  let n = x ^ y;
  while(n) {
    dist++;
    n = n & n - 1;
  } 
  return dist
};
