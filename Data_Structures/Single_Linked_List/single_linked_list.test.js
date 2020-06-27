const { Node, List } = require('./single_linked_list');

(() => {
    let list;

    beforeAll(() => {
        list = new List()
    })

    test('newly created list check', () => {
        expect(list instanceof List).toBeTruthy()
        expect(list.getMax()).toBe(0)
        expect(list.head).toBeFalsy()
        expect(list.isEmpty()).toBeTruthy()

    })

    test('add node to the beginning of the list', () => {
        expect(list.pushFront(3)).toBe(1)
        let new_node = new Node(8)
        expect(list.pushFront(new_node)).toBe(2)
        expect(list.head.data).toBe(8)
        expect(list.pushFront(5)).toBe(3)
        expect(list.topFront().data).toBe(5)
        expect(list.topFront().next.data).toBe(8)
        expect(list.find(3).next).toBe(null)
        expect(list.find(8).next.data).toBe(3)
        expect(list.getSecondToLastNode().data).toBe(8)
        expect(list.isEmpty()).toBeFalsy()
        expect(list.pushFront(6)).toBe(4)
        expect(list.findPrevNode(list.find(8)).data).toBe(5)
        expect(list.topBack().data).toBe(3)
    })

    test('add node to the end of the list', () => {
        expect(list.pushBack(9)).toBe(5)
        let new_node = new Node(12)
        expect(list.pushBack(new_node)).toBe(6)
        expect(list.topBack().next).toBe(null)
        expect(list.getSecondToLastNode().data).toBe(9)
        expect(list.findPrevNode(list.find(9)).data).toBe(3)
        expect(list.getMax()).toBe(6)
    })

    test('deleting nodes', () => {
        expect(list.popBack().data).toBe(12)
        expect(list.topBack().data).toBe(9)
        expect(list.getMax()).toBe(5)
        expect(list.topBack().next).toBe(null)
        expect(list.popFront().data).toBe(6)
        expect(list.getMax()).toBe(4)
        expect(list.topFront().data).toBe(5)
        expect(list.find(12)).toBeFalsy()
        expect(list.find(3)).toBeTruthy()
        let new_node = new Node(7)
        expect(list.found(new_node)).toBeFalsy()
        expect(list.getSecondToLastNode().data).toBe(3)
        expect(list.pushBack(new_node)).toBe(5)
        expect(list.getSecondToLastNode().next.data).toBe(7)
        expect(list.pushFront(2)).toBe(6)
        expect(list.topFront().data).toBe(2)
        expect(list.delete(list.getSecondToLastNode()).data).toBe(9)
        expect(list.find(3).next.data).toBe(7)
        expect(list.getMax()).toBe(5)
        expect(list.findPrevNode(new_node).data).toBe(3)
        expect(list.delete(list.head).data).toBe(2)
        expect(list.topFront().data).toBe(5)
        expect(list.getMax()).toBe(4)
    })

    test('adding node at before / after a specific node', () => {
        let new_node = new Node(6)
        expect(list.pushBack(new_node)).toBe(5)
        expect(list.topBack().data).toBe(6)
        expect(list.findPrevNode(new_node).data).toBe(7)
        expect(list.addBefore(new_node, 1)).toBe(6)
        expect(list.findPrevNode(list.find(1)).data).toBe(7)
        expect(list.addBefore(list.head, 9)).toBe(7)
        expect(list.topFront().data).toBe(9)
        expect(list.head.next.data).toBe(5)
        expect(list.addBefore(list.find(8), 2)).toBe(8)
        expect(list.addAfter(list.head, 4)).toBe(9)
        expect(list.addAfter(new_node, 10)).toBe(10)
        expect(list.getSecondToLastNode().data).toBe(6)
        expect(list.findPrevNode(list.find(2)).data).toBe(5)
    })

    test('moving node to front / end of a list', () => {
        let data_set = [9,4,5,2,8,3,7,1,6,10]
        expect(list.max).toBe(data_set.length)
        // moving first 3 nodes to the back of the list
        for (let i = 0; i < 3; i++) {
            expect(list.moveToBack(list.find(data_set[i])).next).toBe(null)
        }
        expect(list.head.data).toBe(2)
        expect(list.getSecondToLastNode().data).toBe(4)
        expect(list.topBack().data).toBe(5)
        expect(list.find(10).next.data).toBe(9)
        data_set = [2,8,3,7,1,6,10,9,4,5]
        let current = list.head
        let index = 0
        while (current) {
            expect(current.data).toBe(data_set[index])
            current = current.next
            index ++
        }
        //moving last 5 nodes to the front of the list
        for(let i = 0; i < 5; i++) {
            let head = list.head
            expect(list.moveToFront(list.topBack()).next).toBe(head)
        }
        data_set = [6,10,9,4,5,2,8,3,7,1]
        current = list.head
        index = 0
        while (current) {
            expect(current.data).toBe(data_set[index])
            current = current.next
            index ++
        }
    }) 
    
    test('deleting nodes, empty list', () => {
        expect(list.delete(list.find(10)).data).toBe(10)
        expect(list.delete(list.find(9)).data).toBe(9)
        expect(list.getMax()).toBe(8)
        expect(list.delete(list.find(5)).data).toBe(5)
        expect(list.delete(list.find(2)).data).toBe(2)
        expect(list.delete(list.find(3)).data).toBe(3)
        expect(list.delete(list.find(1)).data).toBe(1)
        expect(list.topBack().data).toBe(7)
        expect(list.getMax()).toBe(4)
        let data_set = [6,4,8,7]
        let i = 0
        let current = list.head
        while (current) {
            expect(current.data).toBe(data_set[i])
            current = current.next
            i++
        }
        expect(list.emptyList()).toBe(0)
        expect(list.topFront()).toBe(null)
        expect(list.topBack()).toBeFalsy()
    })
})()
