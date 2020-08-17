from binary_tree import Node, Tree


def get_inorder_successor(node):
    # if node is headnode and no right tree node
    if node.parent is None and node.right is None:
        return None

    # if node has right tree node
    if node.right is not None:
        if node.right.left is None:
            return node.right
        else:
            left_node = node.right.left
            while left_node.left is not None:
                left_node = left_node.left
            return left_node
    # if node has NO right tree node, traverse back up parent node by parent node
    # until we find a node with data/value greater than the input node data / value
    else:
        parent = node.parent
        while parent is not None:
            if parent.data < node.data:
                parent = parent.parent
            else:
                break
        return parent


# ↓↓↓   basic test   ↓↓↓

treeArray1 = [20, 8, 4, 5, 12, 10, 14, 13, 22, 24, 23]

treeArray2 = [10, 5, 30, 22, 26, 24, 23, 27, 35]


def tree_creator(arr, parent=None):
    # if arr is empty
    if len(arr) == 0:
        return None

    node = Node(arr[0])
    node.parent = parent

    # if there is only one node in the array
    if len(arr) == 1:
        return node

    subArr = arr[1:]
    left = []
    right = []
    for i in range(len(subArr)):
        if subArr[i] < node.data:
            left.append(subArr[i])
        else:
            right = subArr[i:]
            break

    node.left = tree_creator(left, node)
    node.right = tree_creator(right, node)

    return node


tree1_head = tree_creator(treeArray1)
tree2_head = tree_creator(treeArray2)


def printTree(headnode, tree=[]):
    tree.append(headnode.data)
    if headnode.left is not None:
        printTree(headnode.left, tree)
    if headnode.right is not None:
        printTree(headnode.right, tree)
    return tree


def test():
    # should return None
    print(get_inorder_successor(tree1_head.right.right))
    # should return node with data 8
    print(get_inorder_successor(tree1_head.left.left.right))
    # should return node with data 23
    print(get_inorder_successor(tree2_head.right.left))
    # should return [20, 8, 4, 5, 12, 10, 14, 13, 22, 24, 23]
    print(printTree(tree1_head))


test()
