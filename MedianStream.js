/**
Instructions from your teacher:
MedianStream

Here is a more complicated, extensive coding challenge. You'll face many challenges of this stature during the interview process. At times you'll be given a problem where the time provided will not be sufficient to construct an ideal solution for, so what will you do? This problem may or may not provide you with the opportunity to experience this sort of interviewing situation. 

This one is heaps of fun...

Here's a resource which may help:
http://eloquentjavascript.net/1st_edition/appendix2.html

Given a stream of unordered integers, find the median of the stream any time we want it. 
We will be asked to find the median multiple times, so the peekMedian function should have optimal time complexity.

Note: The median is the middle number of a sorted set. , or the average of the two middle numbers in an even set (when the set is .

// [1, 4, 8]
// Median is 4 (middle number)

// [1, 3, 7, 8]
// Median is 5 (average of two middle numbers)


Using the MedianStream class: 
// var mStream = new MedianStream();
// mStream.insert(1);
// mStream.insert(3);
// mStream.insert(2);
// mStream.peekMedian(); 
// => 2
// mStream.insert(5);
// mStream.insert(4);
// mStream.peekMedian(); 
// => 3

 * 
 */

/*
** approach:  given that we want to be able to see the median of the stream at any given point, we have no control over what input the class will be recieving(other than that they will be integers).  We can determine that we will need to order the stream on input,  in some fashion, that way we can easily output the median at any point without having to perform expensive operations.  

given that we are only storing integers, we can reliably compare the inputs, and sort them simply.  That being said,  performing a full sort on insert EVERY time will become quite processor intensive quickly as the number of inputs grows.  

--naive solution process: 
  -store the input integers in an array,  sorting after each insert.   we can calulate what to return for peakMedian by looking at the length of the array, if odd we can return the middle value, and if even we can return the average of the two middle values.  
  --this solution will be good for small sets of numbers,  or a relatively ordered stream of input.  this solution would get very time consumptive when we have a very large set of numbers to work with.  it would meet the problem specs though in that peekMedian would always be o(1);

--optimization strategies:
  -reformat data store for easier sorting,
    --sorting the entire array after each insert is inefficient, given that our input is known to be unordered we need a sorting method that does not rely on itterating over each already stored value
      --data store options: 
        --BST(Binary Search Tree): inserts would force sorting, and it would be easy to determine median, so long as the tree was balanced.  the median would always be the 'root' or the average of the root and one of it's children.  to optomize we would have to balance the tree often, which could get expensive over time, and the space complexity is a potential concern as well. 
        --Graph:  likely not a great option as it is inherently unsorted and undirected,  which wouldn't give us any advantage to finding the median on demand. 
        --Binary Heap:  Heaps are great at reducing the time complexity of keeping an array partially ordered,  since each insert always happens at the end and only sorts a portion of the data set to retain it's sorting characteristic.  Heaps are also able to be sorted in a variety of ways depending on what sort algorithm is used.  primarily min or max value is used,  but perhaps we can us a median sort(?), how might that look... 
          --Median sort: following the BH convention,  all inserts will happen at the end, then the end is compared to it's 'parent' index and swapped if the comparison yields true for the sort algorithm.
[1] -- 1 no sort needed,  one element
[1,3] --2 no sort needed, two elems
[1,3,2] --2 sort needed, 2 should end up as first elem [2,1,3]
[1,3,2,5] -- 2.5 sort maybe not needed
[1,3,2,5,4] --3 sort needed
//lookup parent index
//if parent has 2 child indexes occupied, 
  //calculate median of children 
  //if parent is median,  end sort
  //else if current is median
    //swap and continue
  //else if other child is median
    //swap with parent and continue
//if first child of parent, 
  //if median of parent and root 
    //swap and continue
  //else end.
*/



var NaiveMedianStream = function () {
  this.store = [];
};

NaiveMedianStream.prototype = {
  insert: function (value) {
    this.store.push(value)
    this.store.sort();
    console.log('store post sort: ', this.store);
  },
  peekMedian: function () {
    //store ref to size of storage
    let len = this.size();
    //if size is even
    if(len % 2 === 0) {
      //calculate the median value from the two middle most values
      var leftMedian = this.store[(len / 2) -1];
      var rightMedian = this.store[(len / 2)];
      return (leftMedian + rightMedian) / 2; 
    } else {
      //else return the middle most value
      return this.store[Math.ceil((len - 1) / 2)];
    }
  },
  size: function () {
    return this.store.length;
  }
};

var MedianStream = function () {
  this.store = [];
};

MedianStream.prototype = {
  insert: function (value) {
    this.store.push(value)
    this.sort();
    console.log('store post sort: ', this.store);
  },
  peekMedian: function () {
    //if size is odd, 
      //return the first index of store, as that should be median 
    //else 
      //
  },
  size: function () {
    return this.store.length;
  },
  sort: function() {
    //median sorting function--
    //lookup parent index
    let medianIndex = Math.floor((this.size() + 1) /2) + 1; 
    let lowBoundIndex = medianIndex * 2;
    let highBoundIndex = lowBoundIndex + 1; 
    //if parent has 2 child indexes occupied, 
    if (this.size() - 1 === highBoundIndex) {
      //calculate median of children 
      let medianVal = this.store[medianIndex];
      let lowBoundVal = this.store[lowBoundIndex];
      let highBoundVal = this.store[highBoundIndex];
      if (medianVal < highBoundVal && medianVal > lowBoundVal) {
        //if parent is median,  end sort
        return;
      } else if (highBoundVal < medianVal && highBoundVal > lowBoundVal) {
      //else if current is median
        //swap and continue
      } else if (lowBoundVal < highBoundVal && lowBoundVal > medianVal) {
      //else if other child is median
        //swap with parent and continue
      }
    } else {
    //if first child of parent,
      //if median of parent and root 
        //swap and continue
      //else end.
    }
  }
};

var mStream = new MedianStream();
mStream.insert(1);
mStream.insert(3);
mStream.insert(2);
console.log(mStream.peekMedian()); 
// => 2
mStream.insert(5);
mStream.insert(4);
console.log(mStream.peekMedian()); 
mStream.insert(6);
console.log(mStream.peekMedian());

