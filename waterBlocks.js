/*
Water Blocks

You are given an input array where each element represents the height of a line of towers. 

The width of every tower is 1.
It starts raining. How much water is collected between the towers? 
Eg. Input: [5, 2, 3, 2, 1, 3]
Output: 4
Visualization:

'-' is water
 '#' is a block

#
#
# - # -  - #
# # # # - #
# # # # # #

Remember the rules of how to answer technical prompts. Try and go from a working naive solution to a working ideal solution.
*/

/*
i:array of integers representing tower heights
O:number representing the amount of 'water that would be collected'

ideas: 
the amount of water that can be contained above eaach tower is limited by the difference in height between it and it's neighbors,  
*/

var waterBlocks = function (blocks) {
  //initialize a stroage value
  let storage = 0;
  //itterate over the towers
  for (let tower in blocks) {
    //at each tower
    //if there is a tower to the left and right
      //find the highest tower to the right and left
      //calculate the amount of wate this tower would store and add to storage 
  }
  return storage;
};


let sample = [5, 2, 3, 2, 1, 3];
console.log(waterBlocks(sample)); //4
