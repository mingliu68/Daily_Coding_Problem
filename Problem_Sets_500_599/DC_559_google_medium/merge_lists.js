// This problem was asked by Google.

// Given k sorted singly linked lists, write a function to merge all the lists into one sorted singly linked list.

const {List, Node} = require('../../Data_Structures/Single_Linked_List/single_linked_list')

function merge_lists(list_array) {
    if (list_array.length == 0) {
        return null
    }
    if (list_array.length == 1) {
        return list_array[0]
    }
    let new_list = new List()

    return new_list
}


// ↓↓↓   basic test   ↓↓↓

let list1 = new List()
list1.pushBack(3)
list1.pushBack(5)
list1.pushBack(2)
console.log(merge_lists([list1]))
console.log(merge_lists([]))
