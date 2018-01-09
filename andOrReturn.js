'use strict'
/* Testing suite for odd returns discovered with && and || operators */

//testing if use strict has impact:

const truthyReturnFunc = () => {
  return 1;
};

const falseyReturnFunc = () => {
  return 0;
}

const testObj = {
  some: 'prop'
};

const emptyArray = [];

const truthyArray = [1, '1', true];

const falseyArray = [0,-1, false];

const andOperatorFunc = (val1, val2) => {
  if ( val1 && val2 ) {
    return `expression evals to truthy and returns- ${val1 && val2}`; 
  } 
  return `expression evals to falsey and returns- ${val1 && val2}`;
};

const orOperatorFunc = (val1, val2) => {
  if ( val1 || val2 ) {
    return `expression evals to truthy and returns- ${val1 || val2}`; 
  } 
  return `expression evals to falsey and returns- ${val1 || val2}`;
}
//basic booleans
console.log(andOperatorFunc(true,true));
console.log(andOperatorFunc(false,false));
console.log(andOperatorFunc(true,false));
//basic primitives
console.log(andOperatorFunc(1,1));
console.log(andOperatorFunc(0,0));
console.log(andOperatorFunc(1,0));
//builtins
console.log(andOperatorFunc(null,null));
console.log(andOperatorFunc(undefined,undefined));
console.log(andOperatorFunc(null,1));
console.log(andOperatorFunc(undefined,1));
//strings
console.log(andOperatorFunc('','1'));
console.log(andOperatorFunc('1','1'));
console.log(andOperatorFunc('0','0'));
//Arrays/Objects
console.log(andOperatorFunc(emptyArray,emptyArray));
console.log(andOperatorFunc(falseyArray, falseyArray));
console.log(andOperatorFunc(emptyArray, truthyArray));
console.log(andOperatorFunc(testObj,testObj));
console.log(andOperatorFunc(null,testObj));
console.log(andOperatorFunc(testObj,null));
//functions
console.log(andOperatorFunc(truthyReturnFunc,falseyReturnFunc));
console.log(andOperatorFunc(truthyReturnFunc, falseyReturnFunc()));
console.log(andOperatorFunc(falseyReturnFunc(), truthyReturnFunc));

console.log('or Testing ');

console.log(orOperatorFunc(10,0));
console.log(orOperatorFunc(0,10));
console.log(orOperatorFunc(0,0));
console.log(orOperatorFunc(0,null));
console.log(orOperatorFunc(null,0));
