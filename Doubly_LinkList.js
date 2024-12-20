class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList{
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }
    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++; 
        return this;
    }
    pop() {
        let temp = this.tail;
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        }
        this.teil = this.tail.prev;
        this.tail.next = null;
        this.tail.prev = null;
        this.length--;
        return temp;
    }
    unshift(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }
    shift() {
        if (this.length === 0) {
            return undefined;
        }
        let temp = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        this.head = this.head.next;
        this.head.prev = null;
        temp.next = null;
        this.length--;
        return temp;
    }
}

let doublyLinkedList = new DoublyLinkedList(0);
doublyLinkedList.push(10);
doublyLinkedList.push(20);
doublyLinkedList.push(30);
doublyLinkedList.push(40);
doublyLinkedList.unshift(400);
doublyLinkedList.shift();
// console.log(doublyLinkedList.pop());
console.log(doublyLinkedList);