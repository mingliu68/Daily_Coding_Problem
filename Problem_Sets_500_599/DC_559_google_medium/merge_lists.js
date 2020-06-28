// This problem was asked by Google.

// Given k sorted singly linked lists, write a function to merge all the lists into one sorted singly linked list.

const {List, Node} = require('../../Data_Structures/Single_Linked_List/single_linked_list')

// lists as arguments, seperated by comma
function merge_lists(lists) {
    if (arguments.length == 0) {
        return null;
    }
    if (arguments.length == 1) {
        return arguments[0];
    }
    let heads = [];
    Array.from(arguments).forEach((list) => {
        if (list.head != null) heads.push(list.head);
    });
    let merged_list = new List();
    while (heads.length > 1) {
        let small_node = get_min_node(heads);
        heads = heads.filter((node) => node != small_node);
        if (small_node.next) heads.push(small_node.next);
        small_node.next = null;
        merged_list.pushBack(small_node);
    }
    if (heads.length == 1) {
        merged_list.pushBack(heads[0]);
    }
    return merged_list;
}
// helper function, argument is an array of nodes
function get_min_node(nodes) {
    if (nodes.length == 0) {
        return null;
    }
    if (nodes.length == 1) {
        return nodes[0];
    }
    let min = nodes[0];
    for (let i = 1; i < nodes.length; i++) {
        if (nodes[i].data < min.data) {
            min = nodes[i];
        }
    }
    return min;
}
// ↓↓↓   basic testing   ↓↓↓
array1 = [1, 3, 4, 5, 7, 9, 11];
array2 = [2, 2, 5, 6, 8, 9, 10, 12, 13, 14];
array3 = [4, 5];
array4 = [];
array5 = [4, 5, 7, 9, 10];
array6 = [11];
const list1 = arr_to_list(array1);
//console.log(list1);
const list2 = arr_to_list(array2);
//console.log(list2);
const list3 = arr_to_list(array3);
//console.log(list3);
const list4 = arr_to_list(array4);
//console.log(list4);
const list5 = arr_to_list(array5);
//console.log(list5);
const list6 = arr_to_list(array6);
//console.log(list6);
function arr_to_list(array) {
    let list = new List();
    for (let i = 0; i < array.length; i++) {
        list.pushBack(array[i]);
    }
    return list;
}
merged_list = merge_lists(list1, list2, list3, list4, list5, list6);
printList(merged_list);
// [1,2,2,3,4,4,4,5,5,5,5,6,7,7,8,9,9,9,10,10,11,11,12,13,14]
function printList(list) {
    if (!list) {
        console.log("No list exist");
        return;
    }
    if (list.head == null) {
        console.log("List is empty");
    }
    let current = list.head;
    while (current) {
        console.log(`Data: ${current.data}, Next: ${current.next ? current.next.data : null}`);
        current = current.next;
    }
}
printList(merge_lists());
// "No list exist"
printList(list4);
// "List is empty"