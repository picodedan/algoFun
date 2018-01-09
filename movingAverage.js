/*
Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.

For example,
MovingAverage m = new MovingAverage(3);
m.next(1) = 1
m.next(10) = (1 + 10) / 2
m.next(3) = (1 + 10 + 3) / 3
m.next(5) = (10 + 3 + 5) / 3
*/

//moving average class

var MovingAverage = function(size) {
  this.range = size;
  this.window = [];
};

MovingAverage.prototype.next = function(val) {
  let avg = 0;
  if (this.window.length >= this.range) {
    this.window = this.window.slice(1);
  }
  this.window.push(val);
  this.window.forEach((val) => avg +=val);
  return avg / this.window.length;
}

let m = new MovingAverage(3);
console.log(m.next(1));
console.log(m.next(10));
console.log(m.next(3));
console.log(m.next(5));