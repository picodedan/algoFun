/**
  Initially, there is a Robot at position (0, 0). Given a sequence of its moves, judge if this robot makes a circle, which means it moves back to the original place.

  The move sequence is represented by a string. And each move is represent by a character. The valid robot moves are R (Right), L (Left), U (Up) and D (down). The output should be true or false representing whether the robot makes a circle.

  Example 1:
  Input: "UD"
  Output: true
  Example 2:
  Input: "LL"
  Output: false
 */


var judgeCircle = function(moves) {
  let vector = {
    X: 0,
    Y: 0
  };
  const val = {
      U: 1,
      D: -1,
      L: 1,
      R: -1
  };
  let reducer = (sum, cur) => {
    if (cur === 'U' || cur === 'D') { vector['Y'] += val[cur] };
    if (cur === 'L' || cur === 'R') { vector['X'] += val[cur] };
    return vector;
  };
  Array.prototype.reduce.call(moves, reducer, vector);
  return vector['X'] === 0 && vector['Y'] === 0;
};

var altJudgeCircle = (moves) => {
  let x = 0, y = 0, i = 0;
  while (i < moves.length) {
    if (moves[i] === 'U') { y++ };
    if (moves[i] === 'D') { y-- };
    if (moves[i] === 'L') { x++ };
    if (moves[i] === 'R') { x-- };
    i++;
  };
  return x === 0 && y === 0;
}

const betterJudgeCircle = (moves) => {
  let i = 0;

  let vector = {
    x: 0,
    y: 0
  };

  const val = {
      U: 1,
      D: -1,
      L: 1,
      R: -1
  };

  while (i < moves.length) {
    let cur = moves[i];
    if (cur === 'U' || cur === 'D') { vector.y += val[cur] }
    if (cur === 'L' || cur === 'R') { vector.x += val[cur] };
    i++;
  };

  return vector.x === 0 && vector.y === 0;
}

console.log(betterJudgeCircle("LDRRLRUULR")); 