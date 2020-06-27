=====================================================================

This problem was asked by Google.

Given k sorted singly linked lists, write a function to merge all the lists into one sorted singly linked list.

=====================================================================



### My thought process:

1. Creating a new singly linked list.  
2. Keeping all lists in an array / list.  Starting with each list's head node, comparing all head nodes's data and pushback the head node with the smallest number to the new list 
3. Update the list where the newly pushed head node was from, point the list's head node to head.next. (node.remove())
4. Update the newly pushed node's next node 
5. Check the same list above and make sure it's not an empty list (head is not null).  If it's an empty list, pop the list out of the array
6. Keep on doing this until there is only one list left in the array
7. pushback the remaining array

1. 

    ↓↓↓   psudo code   ↓↓↓
    ----------------------
    ```
  
    ```

2. 

    ↓↓↓   psudo code   ↓↓↓
    ----------------------
    ```

    ```

