// This problem was asked by Amazon.

// Given a node in a binary search tree, return the next bigger element, also known as the inorder successor.

// You can assume each node has a **parent pointer**.

const { Node, Tree } = require("../../Data_Structures/Binary_Tree/binary_tree.js")
Node.prototype.parent = null

function getInorderSuccessor(node) {
    // if head node and no right child
    if (!node.parent && !node.right) {
        return null
    }
    // does the node has a right child
    if (node.right) {
        if (!node.right.left) {
            return node.right
        } else {
            let left_child = node.right.left
            while (left_child.left) {
                left_child = left_child.left
            }
            return left_child
        }
    }
    else {
        let parent = node.parent
        while (parent) {
            if (parent.data > node.data) {
                return parent
            } else {
                parent = parent.parent
            }
        }
        return null
    }
}


//↓↓↓   basic test   ↓↓↓

function printTree(headnode, tree = []) {
    tree.push(headnode.data)
    if (headnode.left) printTree(headnode.left, tree)
    if (headnode.right) printTree(headnode.right, tree)
    return tree
}

let treeArray1 = [20, 8, 4, 5, 12, 10, 14, 13, 22, 23]
let treeArray2 = [10, 5, 30, 22, 26, 24, 23, 27, 35]

function treeCreator(arr, parent = null) {
    // if empty array
    if (arr.length == 0) {
        return null
    }
    let node = new Node(arr[0])
    node.parent = parent
    // if only one element in array (single node)
    if (arr.length == 1) {
        return node
    }
    else {
        let subArr = arr.splice(1)
        let leftTree = [], rightTree = [];
        for (let i = 0; i < subArr.length; i++) {
            if (subArr[i] < node.data) {
                leftTree.push(subArr[i])
            }
            else {
                rightTree = subArr.splice(i)
                break;
            }
        }
        node.left = treeCreator(leftTree, node)
        node.right = treeCreator(rightTree, node)
    }

    return node
}

let tree1 = new Tree(treeCreator(treeArray1))
let tree2 = new Tree(treeCreator(treeArray2))
function test() {
    console.log(getInorderSuccessor(tree1.head.left.left.right));
    console.log(getInorderSuccessor(tree2.head.right.left));
}
test();