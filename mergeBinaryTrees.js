'use strict'
/*
Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.

You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.

Example 1:
Input: 
	Tree 1                     Tree 2                  
          1                         2                             
         / \                       / \                            
        3   2                     1   3                        
       /                           \   \                      
      5                             4   7                  
Output: ////
Merged tree:
	     3
	    / \
	   4   5
	  / \   \ 
	 5   4   7
Note: The merging process must start from the root nodes of both trees.
*/

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}


var mergeTrees = (t1, t2) => {
  //so long as both inputs are TreeNodes
  if (t1 instanceof TreeNode && t2 instanceof TreeNode) {
    let mergedTree = new TreeNode(t1.val + t2.val);

    if (t1.left !== null && t2.left !== null) {
      mergedTree.left = mergeTrees(t1.left, t2.left);
    } else if (t1.left !== null) {
      mergedTree.left = t1.left;
    } else {
      mergedTree.left = t2.left;
    }
    if (t1.right !== null && t2.right !== null) {
      mergedTree.right = mergeTrees(t1.right, t2.right);
    } else if (t1.right !== null) {
      mergedTree.right = t1.right;
    } else {
      mergedTree.right = t2.right;
    }
  
    return mergedTree;
  }
  else if (t1 instanceof TreeNode) { return t1; }
  else if (t2 instanceof TreeNode) { return t2; }
  else { return new TreeNode(); };
};

/*
Tree 1                     Tree 2                  
    1                          2                             
    / \                       / \                            
   3   2                     1   3                        
  /                           \   \                      
  5                             4   7 
*/
const tree1 = new TreeNode(1);
tree1.left = new TreeNode(3);
tree1.right = new TreeNode(2);
tree1.left.left = new TreeNode(5);

const tree2 = new TreeNode(2);
tree2.left = new TreeNode(1);
tree2.right = new TreeNode(3);
tree2.left.right = new TreeNode(4);
tree2.right.right = new TreeNode(7);

const tree3 = new TreeNode();
const tree4 = new TreeNode();


let merged = mergeTrees(tree3, tree4);

console.log(merged);