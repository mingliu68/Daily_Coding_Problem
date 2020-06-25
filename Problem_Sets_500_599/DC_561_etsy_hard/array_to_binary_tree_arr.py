# This problem was asked by Etsy.

# Given a sorted array / list, convert it into a height-balanced binary search tree.

# using an array for binary tree representation without a tree node class

import math

def list_to_binary(list):
    if len(list) == 0:
        return []
    if len(list) <= 2:
        return list
    else: 
        center_index = math.floor(len(list) / 2)
        left_tree = list[ : center_index]
        right_tree = list[center_index+1 : ]
        return [list[center_index]] + list_to_binary(left_tree) + list_to_binary(right_tree)




# ↓↓↓   basic test   ↓↓↓

sorted0 = [1,2,3]

binary_tree0 = list_to_binary(sorted0)
print(binary_tree0)
#[2,1,3]

sorted1 = [2,3,4,5,6,7,8] 

sorted2 = [0,1,2,3,4,5,6,7,8,9] 

binary_tree1 = list_to_binary(sorted1)
binary_tree2 = list_to_binary(sorted2)

print(binary_tree1)
#[5,3,2,4,7,6,8]


print(binary_tree2)
# [5,2,0,1,3,4,8,6,7,9]