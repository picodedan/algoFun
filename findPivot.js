/*
findPivot

I have an array of words that are mostly alphabetical, except they start somewhere in the middle of the alphabet, reach the end, and then start from the beginning of the alphabet.
In other words, this is an alphabetically ordered array that has been "rotated." Write a function that returns the index of the pivot, or null if there is no pivot (meaning the entire list of words is in alphabetical order). 

For example:
['dog', 'eagle', 'falcon', 'apple', 'bear', 'cat']
// returns 3

Remember the rules of how to answer technical prompts. Try and go from a working naive solution to a working ideal solution.

*/

var letterPosition = {
  a:1,
  b:2,
  c:3,
  d:4,
  e:5,
  f:6,
  g:7,
  h:8,
  i:9,
  j:10,
  k:11,
  l:12,
  m:13,
  n:14,
  o:15,
  p:16,
  q:17,
  r:18,
  s:19,
  t:20,
  u:21,
  v:22,
  w:23,
  x:24,
  y:25,
  z:26
}

var findPivot = function (array, start, end) {
	// naive solution type 
	  //store a reference to the last value
	  //for each word in the array,
	    //check if the current value of the first letter is not greater than the last
	      //if true return the current index
    //return null otherwise
    
  //ideal solution
    //default start to 0 if not provided and end to the lenght of the array
    start = start || 0;
    end = end || array.length - 1;
    //calulate middle index
    let middle  = Math.floor((start + end) / 2);
    console.log('start,middle, end ', start, middle, end);
    let startVal = letterPosition[array[start][0]];
    let endVal = letterPosition[array[end][0]];
    let middleVal = letterPosition[array[middle][0]];
    console.log('start middle and end vals: ',startVal, middleVal, endVal);
    //if start and end are sorted
    if (startVal < endVal) {
      //return null
      return null;
    }
    //if start is less than middle
    if (startVal < middleVal) {
      //look at the right side
      return findPivot(array, middle + 1, end);
    }
    //if middle is less than end
    if (middleVal < endVal) {
      //look at left side
      return findPivot(array, start, middle - 1);
    }
    //if start is equal to end
    if (startVal === endVal) {
      //return that index. 
      return start;
    }
    return null;
	// for(var i = 0; i < 10; i++){
	//     console.log(i);
	// }
};

/* to find the pivot we will have to itterate over the array checking the 
first letter of each word to see if it is in the order to the one previous
when we find that a given word is 'out of order' we can return that index. 
if we get to the end and non has been found we would return null

this approach is the straighforward naive approach,  with would result in O(n) time 
at worst.  

given that we know the array is partially sorted,  we can approach this similar to a 
binary search,  and check only a portion of the array at any given time.
if we check the beginning and end and they are in order we can terminate as that 
tells us the array is sorted
otherwise we can compare the middle with left and right sides,  choosing whichever
side is apparently unsorted, then repreating the process until we find the index 
where the pivot has occured.  
*/

let sample = ['dog', 'eagle', 'falcon', 'apple', 'bear', 'cat'];

console.log(findPivot(sample)); //3