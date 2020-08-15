=====================================================================

This problem was asked by Amazon.

Given a node in a binary search tree, return the next bigger element, also known as the inorder successor.

For example, the inorder successor of 22 is 30.

      10
     /  \
    5    30
        /  \
      22    35

In Binary Tree, Inorder successor of a node is the next node in Inorder traversal of the Binary Tree. Inorder Successor is NULL for the last node in Inorder traversal.

In Binary Search Tree, Inorder Successor of an input node can also be defined as the node with the smallest key greater than the key of the input node. So, it is sometimes important to find next node in sorted order.

        20
       /  \
      8    22
     /  \
    4    12    
        /  \
       10   14
     
In the above diagram, inorder successor of 8 is 10, inorder successor of 10 is 12 and inorder successor of 14 is 20.

=====================================================================

### My thought process:

1. traverse the binary tree and keep the highest

2. 

    ↓↓↓   psudo code   ↓↓↓
    ----------------------
    ```
    
    ```