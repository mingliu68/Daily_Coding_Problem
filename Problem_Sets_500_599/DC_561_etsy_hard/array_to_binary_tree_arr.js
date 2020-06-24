// This problem was asked by Etsy.

// Given a sorted array, convert it into a height-balanced binary search tree.

// using an array for binary tree representation without a tree node class
function array_to_binary(array) {

    if(array.length <= 2) {
        return array
    }

    let center_index = Math.floor(array.length / 2)
    let left_child_tree = array.slice(0, center_index)
    let right_child_tree = array.slice(center_index + 1)
    
    return [array[center_index],...array_to_binary(left_child_tree),...array_to_binary(right_child_tree)]
}




//↓↓↓   basic test   ↓↓↓

let sorted1 = [2,3,4,5,6,7,8] 
let sorted2 = [0,1,2,3,4,5,6,7,8,9] 

let binary_tree1 = array_to_binary(sorted1)
let binary_tree2 = array_to_binary(sorted2)

console.log(binary_tree1)
console.log(binary_tree2)