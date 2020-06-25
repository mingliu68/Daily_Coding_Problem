=====================================================================

This problem was asked by Etsy.

Given a sorted array, convert it into a height-balanced binary search tree.

=====================================================================

### Height-balanced binary tree:

    An empty tree is height-balanced. A non-empty binary tree T is balanced if:
    1) Left subtree of T is balanced
    2) Right subtree of T is balanced
    3) The difference between heights of left subtree and right subtree is not more than 1. 


### My thought process:

height-balanced binary have same height on both sides (same level of children), balanced on every level, with maximum difference of one level. Left tree node values less than the root node value and right tree node values greater than root node.  

By selecting the node at the center at each repetition, we are guaranteed to have nodes left of the center node with values lower than the center node value, and nodes right of the center node with values higher than the center node value. Since we are halving the array during each repetition, we are also guaranteed to have either the same number of nodes on each side or just one node difference.  Based on the above information, by selecting the center node at each repetition, we will continue to have a balanced tree and all its sub-trees balanced, with the maximum height difference of 1 



example [2,3,4,5,6,7,8] 
new binary tree [5,3,2,4,7,6,8]

```
     5
   /   \
  3     7   
 / \   / \
2   4 6   8
```

example array [0,1,2,3,4,5,6,7,8,9] 
new binary tree [5,2,1,0,4,3,8,6,7,9]  

```
       5       L = [0,1,2,3,4]  R = [6,7,8,9]
     /   \
    2     8    L[0,1] R[3,4] / L[6,7] R[9]
   / \   / \
  1  4   6  9  L[0]/L[3]/R[7]
 /   /    \
0   3      7
```

if returning array when array length <= 2
new binary tree is [5,2,0,1,3,4,8,6,7,9]

```
       5       L = [0,1,2,3,4]  R = [6,7,8,9]
     /   \
    2     8    L[0,1] R[3,4] / L[6,7] R[9]
   / \   / \
  0  3   6  9  push remaining arrays when length <= 2
   \  \   \
    1  4   7
```


1. concept using array as representation of the binary tree (w/o using a Node class):

    pushing the center element of the array to the newly created binary tree array, using recursion to continue pushing the center element from left and right tree.  


    ↓↓↓   psudo code   ↓↓↓
    ----------------------

    ```
    sorted = [2,3,4,5,6,7,8]

    function array_to_binary_arr(array) {

        if(array.length <= 2) {
            return array
        }

        center_index = Math.floor(array.length / 2)
        left_child_tree = array.slice(0, center_index)
        right_child_tree = array.slice(center_index + 1)

        return [array[center_index], ...array_to_binary(left_child_tree), ...array_to_binary(right_child_tree)]
    }
    ```

2. same concept as above, but using a Node class instead of an array:

    Node class has left, right and the value/data properties

    1.  function select the center element of the array, creating root node with center element
    2.  function recursion to eventually complete both node.left and node.right trees

    ↓↓↓   psudo code   ↓↓↓
    ----------------------

    ```
    sorted = [2,3,4,5,6,7,8]

    function array_to_binary(array) {
        
        if (array.length == 0) {   
            return null
        }
        if (array.length = 1) {
            let node = new Node(array[0])
            return node
        }
        else {
            let center_index = Math.floor(array.length / 2)
            let left_tree = array.slice(0, center_index)
            let right_tree = array.slice(center_index + 1)
            let node = new Node(array[center_index])
            if (left_tree.length > 0) {
                node.left = array_to_binary(left_tree)
            }
            if (right_tree.length > 0) {
                node.right = array_to_binary(right_tree)
            }
            return node
        }
        
    }
    ```


