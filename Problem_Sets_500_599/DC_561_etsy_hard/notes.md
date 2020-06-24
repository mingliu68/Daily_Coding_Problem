=====================================================================

This problem was asked by Etsy.

Given a sorted array, convert it into a height-balanced binary search tree.


* About height-balanced binary tree:

    An empty tree is height-balanced. A non-empty binary tree T is balanced if:
    1) Left subtree of T is balanced
    2) Right subtree of T is balanced
    3) The difference between heights of left subtree and right subtree is not more than 1. 

=====================================================================

height-balanced binary have same height on both sides (same level of children), balanced on every level, with left lower than the root node and right greater than roote node.  

example [2,3,4,5,6,7,8] 
new binary tree [5,3,2,4,7,6,8]

     5
   /   \
  3     7   
 / \   / \
2   4 6   8

example array [0,1,2,3,4,5,6,7,8,9] 
new binary tree [5,2,1,0,4,3,8,6,7,9]  

       5       * L = [0,1,2,3,4]  R = [6,7,8,9]
     /   \
    2     8    * L[0,1] R[3,4] / L[6,7] R[9]
   / \   / \
  1  4   6  9  * L[0]/L[3]/R[7]
 /   /    \
0   3      7

if returning array when array length <= 2
new binary tree is [5,2,0,1,3,4,8,6,7,9]

       5       * L = [0,1,2,3,4]  R = [6,7,8,9]
     /   \
    2     8    * L[0,1] R[3,4] / L[6,7] R[9]
   / \   / \
  0  3   6  9  * push remaining arrays when length <= 2
   \  \   \
    1  4   7



1. concept using array as representation of the binary tree (w/o using a Node class):

    pushing the center element of the array to the newly created binary tree array, using recursion to continue pushing the center element from left and right tree.  


    ↓↓↓   psudo code   ↓↓↓
    ----------------------


    sorted = [2,3,4,5,6,7,8]

    function array_to_binary(array) {

        if(array.length <= 2) {
            return array
        }

        center_index = Math.floor(array.length / 2)
        left_child_tree = array.slice(0, center_index)
        right_child_tree = array.slice(center_index + 1)

        return [array[center_index], ...array_to_binary(left_child_tree), ...array_to_binary(right_child_tree)]
    }

2. same concept as above, but using a Node class instead of an array:

    Node class has left, right and the value/data properties

    Node  = {
        left : someNode
        right = 
    }

    pushing the center element of the array to the newly created binary tree array, using recursion to continue pushing the center element from left and right tree.  

    ↓↓↓   psudo code   ↓↓↓
    ----------------------


    sorted = [2,3,4,5,6,7,8]

    function array_to_binary(array) {

        if(array.length <= 2) {
            return array
        }

        center_index = Math.floor(array.length / 2)
        left_child_tree = array.slice(0, center_index)
        right_child_tree = array.slice(center_index + 1)

        return [array[center_index], ...array_to_binary(left_child_tree), ...array_to_binary(right_child_tree)]
        
    }


