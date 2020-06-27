class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
    remove() {
        this.next = null
        return this
    }
}

class List {
    constructor(head = null) {
        this.head = head
        this.max = this.head ? 1 : 0
    }

    // add to the front of list, argument can be either the data (number) or node
    // return list.max (length)
    // parameter can be either data or node
    pushFront(data_node) {
        let new_node = data_node instanceof Node ? data_node : new Node(data_node)
        if (this.isEmpty()) {
            this.head = new_node
        }
        else {
            new_node.next = this.head
            this.head = new_node 
        }
        this.max += 1
        return this.max
    }

    // remove a node from beginning of the list
    // return the removed node, null if list is empty
    popFront() {
        if (this.isEmpty()) {
            return null
        }
        let old_head = this.head
        this.head = old_head.next
        old_head.remove()
        this.max -= 1
        return old_head
    }

    // return the first node, null if empty list
    topFront() {
        return this.head
    }

    // add to the back of the list
    // return this.max (length)
    // parameter can be either data or node
    pushBack(data_node) {
        let new_node = data_node instanceof Node ? data_node : new Node(data_node)
        if (this.isEmpty()) {
            this.head = new_node
        }
        else {
            let end_node = this.topBack()
            end_node.next = new_node
        }
        this.max += 1
        return this.max
    }

    // remove the last node on the list
    // return the removed node, null if list is empty
    popBack() {
        if (this.isEmpty()) {
            return null
        } else {
            let removed;
            if (!this.head.next) {
                removed = this.head
                this.head = null
            }
            else {
                let new_end_node = this.getSecondToLastNode()
                removed = new_end_node.next
                new_end_node.next = null
            }
            this.max -= 1
            return removed
        }
    }

    // return the last node, return null if empty list
    topBack() {
        if(this.isEmpty()) {
            return null
        }
        let current = this.head
        while (current.next) {
            current = current.next
        }
        return current
    }

    // add a new node after a specified node
    // return null if node does not exist, list.max if successfully added
    // 1st parameter is the node, 2nd parameter can be either data or node to be added
    addAfter(node, data_node) {
        if (!this.found(node)) {
            return null
        }
        let new_node = data_node instanceof Node ? data_node : new Node(data_node)
        new_node.next = node.next
        node.next = new_node
        this.max += 1
        return this.max
    }

    // add a new node before a specified node
    // return null if node does not exist, list.max if successfully added
    // 1st parameter is the node, 2nd parameter can be either data or node to be added
    addBefore(node, data_node) {
        if (this.isEmpty()) {
            return null
        }
        let new_node = data_node instanceof Node ? data_node : new Node(data_node)
        if (this.head == node) {
            new_node.next = this.head
            this.head = new_node
            this.max += 1
            return this.max
        }
        let prev_node = this.findPrevNode(node)
        if (prev_node) {
            new_node.next = node
            prev_node.next = new_node
            this.max += 1
            return this.max
        }
        return null
    }

    // check and see if a node exist in the list, return true if found, false if not
    found(node) {

        let current = this.head
        while (current) {
            if (current == node) {
                return true
            }
            current = current.next
        }
        return false
    }

    // find the previous node to a specific node
    // return the previous node if node in list, return null if node NOT in list
    // if node is the head node, the method will also return null (prev node to head is null)
    findPrevNode(node) {
        if (this.isEmpty()) {
            return null
        }
        let current = this.head
        let prev = null
        while (current) {
            if (current == node) {
                return prev
            }
            prev = current
            current = current.next
        }
        return null
    }

    // find a node by data value
    // return found node or null if not found
    find(data) {
        if (this.isEmpty()) {
            return null
        }
        let current = this.head
        while (current) {
            if (current.data == data) {
                return current
            }
            current = current.next
        }
        return null
    }

    // get second to last node
    // return null if list is empty, or if there is only single node in list
    getSecondToLastNode() {
        if (this.isEmpty() || !this.head.next) {
            return null
        }
        let current = this.head
        while (current.next.next) {
            current = current.next
        }
        return current
    }

    // delete a node
    // return deleted node or null if list is empty or node not existed
    // parameter is the node for deletion
    delete(node) {
        if (this.head == node) {
            this.head = node.next
            node.remove()
            this.max -= 1
            return node
        }
        let current = this.head.next
        let prev = this.head
        while (current) {
            if (current == node) {
                prev.next = current.next
                current.remove()
                this.max -= 1
                return current
            }
            prev = current
            current = current.next
        }
        return null
    }

    // check if the list is empty
    // return true or false value
    isEmpty() {
        return !this.head
    }

    // empty the eitre list
    // return list.max (list length)
    emptyList() {
        this.head = null
        this.max = 0
        return this.max
    }

    // get the length of the list
    getMax() {
        return this.max
    }

    // move an existing node to the beginning of the list
    // return node if successful, return null if node is not in list
    moveToFront(node) {
        if (!this.found(node)) {
            return null
        }
        let move_node = this.delete(node)
        this.pushFront(move_node)
        return move_node
    }

    // move a node to the end of the list
    // return node if successful, return null if node is not in list
    moveToBack(node) {
        if (!this.found(node)) {
            return null
        }
        let move_node = this.delete(node)
        this.pushBack(move_node)
        return move_node
    }
}

module.exports = {
    Node,
    List
}