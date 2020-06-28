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
    function merge_lists(list_array) {
        if(list_array.length == 0) return null
        if(list_array.length == 1) return list_array[0]
        let merge_list = new List()
        let heads = []
        for(let i = 0; i < list_array.length; i++) {
            heads.push(list_array[i].head)
        }

        while (heads.length > 1) {
            let small_node = smallest_node(heads)

            heads = heads.filter( head => head != small_node ) 
            if (small_node.next != null) {
                heads.push(small_node.next)
            }
            merge_list.pushBack(small_node)  
        }
        return merge_list
    }

    function smallest_node(nodes) {
        let min = nodes[0]
        for(let i = 1; i < nodes.length; i++) {
            if(nodes[i].data < min.data) {
                min = nodes[i]
            }
        }
        return min
    }
    ```