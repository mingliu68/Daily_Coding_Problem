# This problem was asked by Etsy.

# Given a sorted array / list, convert it into a height-balanced binary search tree.

from binary_tree import Node
import math

def list_to_binary(list):
    if len(list) == 0 :
        return None
    if len(list) == 1 :
        node = Node(list[0])
        return node
    else :
        center_index = math.floor(len(list) / 2)
        left_tree = list[ : center_index ]
        right_tree = list[ center_index + 1 : ]
        node = Node(list[center_index])
        if len(left_tree) > 0 :
            node.left = list_to_binary(left_tree)
        if len(right_tree) > 0 :
            node.right = list_to_binary(right_tree)
        return node
    



# ↓↓↓   basic test   ↓↓↓

sorted0 = [1,2,3]

binary_tree0 = list_to_binary(sorted0)
print(binary_tree0.data, binary_tree0.left.data, binary_tree0.right.data)
# 2 1 3

sorted1 = [2,3,4,5,6,7,8] 

sorted2 = [0,1,2,3,4,5,6,7,8,9] 

binary_tree1 = list_to_binary(sorted1)
binary_tree2 = list_to_binary(sorted2)

print(binary_tree1.data, binary_tree1.left.data, binary_tree1.right.data)
# 5 3 7


print(binary_tree2.data, binary_tree2.left.data, binary_tree2.right.data)
# 5 2 8