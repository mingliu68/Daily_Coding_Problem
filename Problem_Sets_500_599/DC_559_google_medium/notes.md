=====================================================================

This problem was asked by Google.

Given k sorted singly linked lists, write a function to merge all the lists into one sorted singly linked list.

=====================================================================



### My thought process:

1. function with an array of k singly linked lists as argument
    function merge_lists(list_array)
1. edge cases
    1. if list_array length is zero, return null
    1. if list_array length is 1, return list_array[0]
1. Create a new singly linked list as merged_list  
1. Create a new array containing all heads as heads
1. while heads.length > 1 do the following
1. Comparing list head node data, keep track of the one with the lowest value. <= creating a helper function to get the node with lowest data/value
1. pushBack the smallest node to the new merged_list
1. update heads array, smallest node is changed to smallest node.next
1. is the updated node null? if it is, pop it out of the heads array
1. once it's out of the while loop, backPush the remaining node in heads array to the new merged_list
1. return merged_list



    ↓↓↓   psudo code   ↓↓↓
    ----------------------
    ```
  
    ```

2. 

    ↓↓↓   psudo code   ↓↓↓
    ----------------------
    ```

    ```

