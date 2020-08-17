class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None
        self.parent = None

    def __str__(self):
        return f'data: {self.data}, left: {self.left.data if self.left is not None else self.left}, right: {self.right.data if self.right is not None else self.right}, parent: {self.parent.data if self.parent is not None else self.parent}'


class Tree:
    def __init__(self, node):
        self.head = node
