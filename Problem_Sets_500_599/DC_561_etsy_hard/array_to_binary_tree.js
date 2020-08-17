// This problem was asked by Etsy.

// Given a sorted array, convert it into a height-balanced binary search tree.

const { Node } = require("../../Data_Structures/Binary_Tree/binary_tree.js")

function array_to_binary(array) {
    // empty array return null    
    if (array.length == 0) {
        return null
    }
    if (array.length == 1) {
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


//↓↓↓   basic test   ↓↓↓
function testing() {
    let sorted1 = [2, 3, 4, 5, 6, 7, 8]
    let sorted2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let sorted3 = [1]
    let sorted4 = []

    let binary_tree1 = array_to_binary(sorted1)
    let binary_tree2 = array_to_binary(sorted2)

    console.log(binary_tree1)
    console.log(binary_tree2)

    let binary_tree3 = array_to_binary(sorted3)
    let binary_tree4 = array_to_binary(sorted4)

    console.log(binary_tree3)
    console.log(binary_tree4)
}

testing();
