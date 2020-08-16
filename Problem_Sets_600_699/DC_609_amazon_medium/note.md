=====================================================================

This problem was asked by Amazon.

Given a node in a binary search tree, return the next bigger element, also known as the inorder successor.

For example, the inorder successor of 22 is 30.

      10
     /  \
    5    30
        /  \
      22    35

You can assume each node has a **parent pointer**.

=====================================================================

In the diagram below, 
    inorder successor of 22 is 23, 
    inorder successor of 35 is null, 
    inorder successor of 26 is 30, 
    inorder successor of 10 is 22,
    inorder successor of 24 is 26, 
    inorder successor of 30 is 35

      10
     /  \
    5    30
        /  \
      22    35
        \
         26
        /
       24
      /
     23

In Binary Tree, Inorder successor of a node is the next node in Inorder traversal of the Binary Tree. Inorder Successor is NULL for the last node in Inorder traversal.

In Binary Search Tree, Inorder Successor of an input node can also be defined as the node with the smallest key greater than the key of the input node. So, it is sometimes important to find next node in sorted order.

                20
             /      \
            8         22
         /     \        \
        4       12       23     
         \     /   \ 
          5   10   14
                   /
                  13

In the above diagram, 
    inorder successor of 8 is 10, 
    inorder successor of 10 is 12, 
    inorder successor of 12 is 13, 
    inorder successor of 23 is null,
    inorder succeesor of 22 is 23,
    inorder successor of 5 is 8,
    inorder successor of 14 is 20.

=====================================================================

### My thought process:

    has right tree node?
        -> does right tree node has a left tree node? 
            -> yes, keep on traverse down to the last left tree node.  the last left tree node is the inorder successor
            -> no, right tree node is the inorder successor

    does not have right tree node?
        -> is it the end of the tree (last node) or the head node?
            -> yes, the inorder successor is null
            -> no, the parent node is the inorder success if the parent node value is greater than the input node value.  
            Else, traverse back until the node value is greater than the input node value.  
    

    edge cases:
        head node with no right tree node
        last node (max value) of the tree

    





    ↓↓↓   psudo code   ↓↓↓
    ----------------------
    ```
    
    ```